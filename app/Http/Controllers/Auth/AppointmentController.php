<?php

namespace App\Http\Controllers\Auth;

use App\Events\AppointmentRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    public function index() {
        $isPrefect = (auth()->user()->user_type == 'prefect') ? 'prefect' : 'other';
        return Inertia::render("$isPrefect/appointment",  [
            'user' => auth()->user(),
        ]);
    }
    public function storeRequest(Request $request) {
        $senderDetails = [
            'sender' => $request->user_id,
            'type' => $request->type,
            'date' => $request->date_appoint,
            'title' => $request->appointment_title,
            'time' => $request->time_start,
            'description' => $request->reason
        ];
        $prefect = User::where('user_type', 'prefect')
                       ->where('activate', true)
                       ->first();
        broadcast(new AppointmentRequest($senderDetails, $prefect->id));
    }
}
