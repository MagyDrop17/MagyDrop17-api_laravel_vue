<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRequest;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{

    public function index() {

        /* return Post::all(); */

        $orderColumn = request('order_column', 'created_at');

        if (!in_array($orderColumn, ['id', 'title', 'created_at'])) {
            $orderColumn = 'created_at';
        }

        $orderDirection = request('order_direction', 'desc');

        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }

        $post = Post::with('category')
            ->when(request('category'), function($query) {
                $query->where('category_id', request('category'));
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(2);

        return PostResource::collection($post);

    }

    public function store(StoreRequest $request) {

        if ($request->hasFile('thumnail')) {
            $filename = $request->file('thumnail')->getClientOriginalName();
            info($filename);
        }

        $post = Post::create($request->validated());
        sleep(2);

        return new PostResource($post);

    }

    public function show(Post $post) {
        return new PostResource($post);
    }

    public function update(StoreRequest $request, Post $post) {

        $post->update($request->validated());

        sleep(2);

        return new PostResource($post);
    }


}
