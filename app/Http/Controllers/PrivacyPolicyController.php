<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivacyPolicyController extends Controller
{
    public function index(){
        return inertia('privacypolicy');
    }

    public function deletion(){
        return inertia('deletion');
    }
}
