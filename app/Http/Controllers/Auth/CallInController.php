<?php

namespace App\Http\Controllers\Auth;

use App\Events\CallInStudent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CallInController extends Controller
{
    public function __invoke(Request $request) {
        

        broadcast(new CallInStudent());
    }
}
