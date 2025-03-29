<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;

class OTPVerificationController extends Controller
{
    public function contactIndex() {
        return Inertia::render('other/password-recovery');
    }
    public function store(Request $request) {
        $contact = base64_decode($request->contact);
        switch($request->type) {
            case 'email':
                break;
            case 'phone number':
                break;
        }
    }
    public function verifyOTP(Request $request) {
        
    }
}
