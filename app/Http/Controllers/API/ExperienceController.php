<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Experiences;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experiences::orderBy('sort')
        ->orderBy('created_at')->get();
        return response()->json($experiences);
    }
}
