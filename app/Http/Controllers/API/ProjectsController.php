<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProjectsController extends JsonResponse
{
    public function index(Request $request)
    {
        $projects = Projects::where('status','active')->latest()->get();
        return response()->json($projects);
    }
}
