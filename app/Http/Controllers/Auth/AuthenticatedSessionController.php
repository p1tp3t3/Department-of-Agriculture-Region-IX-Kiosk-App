<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create()
    {
        if(auth()->check()) return back()->withErrors(['message' => 'you are log in already']);
        return Inertia::render('login');
    }
    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request)
    {
        $findUser = User::where('username', $request->username)
                        ->orWhere('user_id', $request->username)
                        ->first();
        
        if (!$findUser) {
            return back()->withErrors(['username' => "Account doesn't exist. Please try again"]);
        }
    
        if (!Auth::attempt([$findUser->username ? 'username' : 'user_id' => $request->username, 'password' => $request->password])) {
            return back()->withErrors(['password' => 'Wrong password. Please try again']);
        }
        return $this->startSession($request, $findUser);
    }
    private function startSession($request, $user) 
    {
        if ($user->activate) {
            $request->session()->regenerate();
            return Inertia::location(route("type.{$user->user_type}.dashboard"));
        }     
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    
        return back()->withErrors(['username' => 'This account has been deactivated.']);
    }


    public function destroy(Request $request)
    {
        $user_id = auth()->id();

        $sessionCount = DB::table('sessions')
                        ->where('user_id', $user_id)
                        ->count('user_id');
                        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if($sessionCount <= 1) {
            auth()->user()->update(['active' => false]);
        }

        return Inertia::location(route("type.user"));
    }
}
