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
        return PostResource::collection(Post::all());
    }

}
