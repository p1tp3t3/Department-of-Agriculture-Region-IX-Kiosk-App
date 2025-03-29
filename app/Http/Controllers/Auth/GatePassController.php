<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GatePassController extends Controller
{
    public function index() {
        $isPrefect = self::isPrefect() ? 'prefect' : 'other';
        return Inertia::render("$isPrefect/gatepass", [
            'user' => auth()->user(),
        ]);
    }
    public function qrcodeIndex() {
        return Inertia::render('other/gatepass-qr-scanner');
    }
    public function prefectIndex() {
        return Inertia::render('prefect/gatepass', [
            'user' => auth()->user(),
            'authType' => auth()->user()[auth()->user()->auth_type],
        ]);
    }
    public function store(Request $request) {
        
    }
    public function approveRequest() {

    }
    public function destroy() {
        
    }
    private function isPrefect() {
        return auth()->user()->user_type == 'prefect';
    }
}
