<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmissionController extends Controller
{
    public function index() {
        $isPrefect = self::isPrefect() ? 'prefect' : 'student';

        return Inertia::render("$isPrefect/admission", [
            'user' => auth()->user()
        ]);
    }
    public function store(Request $request) {
        $admissionField = [

        ];
        Admission::create($admissionField);
    }
    public function confirmAdmission(Request $request) {
        
    }
    public function rejectAdmission(Request $request) {
        
    }
    private function isPrefect() {
        return auth()->user()->user_type == 'prefect';
    }
}
