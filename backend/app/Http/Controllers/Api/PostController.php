<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{

    public function index() {
        /* return Post::all(); */

        $post = Post::with('category')->paginate(10);

        return PostResource::collection($post);
    }

}
