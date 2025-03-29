<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReferralController extends Controller
{
    public function index() {
        $isPrefect = self::isPrefect() ? 'prefect' : 'faculty';
        return Inertia::render("$isPrefect/referral", [
            'user' => auth()->user()
        ]);
    }
    private function isPrefect() {
        return auth()->user()->user_type == 'prefect';
    }
}
