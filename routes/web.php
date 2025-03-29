<?php
use App\Http\Controllers\Auth\AccountController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\GatePassController;
use App\Http\Controllers\OTPVerificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use Illuminate\Support\Facades\Route;


Route::get('/', [AuthenticatedSessionController::class, 'create'])
->name('type.user');

Route::post('/log-in', [AuthenticatedSessionController::class, 'store'])
->name('log-in');


Route::post('/contact/{username}', [AccountController::class, 'getContact']);

Route::get('/forgot-password', [OTPVerificationController::class, 'contactIndex'])
->name('verify.otp');

Route::post('/forgot-password/otp', [OTPVerificationController::class, 'store'])
->name('verify.send_otp');

Route::post('/forgot-password/recover', [NewPasswordController::class, 'store'])
->name('verify.recover');

/*
Route::get('/forgot-password/edit-password', [OTPVerificationController::class, 'contactIndex'])
->name('verify.edit-password');
Route::post('/forgot-password/recover-password', [OTPVerificationController::class, 'contactIndex'])
->name('verify.recover');
*/

Route::middleware('auth')
->get('/log-out', [AuthenticatedSessionController::class, 'destroy'])
->name('log-out');

Route::get('/gatepass-validation', [GatePassController::class, 'qrcodeIndex']);


require __DIR__ . '/auth.php';

