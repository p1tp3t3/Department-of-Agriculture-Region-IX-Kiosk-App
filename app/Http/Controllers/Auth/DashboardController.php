<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    public function itrcDashboard() {
        $account = new User();

        return Inertia::render('itrc/dashboard', [          
            'user' => auth()->user(),
            'account_total' => $account->count('id'),
            'activate' => [$account->where('activate', true)->count('activate'), //activate
                           $account->where('activate', false)->count('activate')], //deactivate
            'new_users' => $account->newUsers(),
        ]);
    }
    public function studentDashboard() {
        return Inertia::render('student/dashboard', [
            'user' => auth()->user(),
        ]);
    }
    public function prefectDashboard() {
        return Inertia::render('prefect/dashboard', [
            'user' => auth()->user(),
        ]);
    }
    public function facultyDashboard() {
        return Inertia::render('faculty/dashboard', [
            'user' => auth()->user(),
        ]);
    }
    public function programHeadDashboard() {
        return Inertia::render('program-head/dashboard', [
            'user' => auth()->user(),
        ]);
    }
    public function nonTeachingStaffDashboard() {
        return Inertia::render('non-teaching-staff/dashboard', [
            'user' => auth()->user(),
        ]);
    }
    public function parentDashboard() {
        return Inertia::render('parent/dashboard', [
            'user' => auth()->user(),
        ]);
    }
}
