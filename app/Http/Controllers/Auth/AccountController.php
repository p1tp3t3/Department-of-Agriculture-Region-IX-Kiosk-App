<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class AccountController extends Controller
{
    public function index() {
        $account = new User();
        return Inertia::render('itrc/accounts',  $account->allUserAccount(100));
    }
    public function searchAccount($username) {
        $account = new User();
        return response()->json([$account->findAccountContactDetail($username)]);
    }
    public function accountSettings() {
        return Inertia::render('other/account-settings', [
            'user' => auth()->user()
        ]);
    }
    public function getAllUser($l) {
        $account = new User();
        return $account->allUserAccount($l);
    }
    public function getContact($username) {
        $account = new User();
        $email = $account->getContact($username)->email;
        $contactNumber = $account->getContact($username)->contact_number;

        return response()->json([
            'email' => !empty($account->getContact($username)->email) 
                       ? base64_encode($email) : null, 
            'contact_number' => !empty($account->getContact($username)->contact_number) 
                              ? base64_encode($contactNumber) : null
        ]);
    }
    public function toggle($username, Request $request) {
        User::where('username', $username)
            ->update(['activate' => $request->status]);
    }
    public function setActivityStatus(Request $request) {
        auth()->user()->update(['active' => $request->status]);
    }
}
