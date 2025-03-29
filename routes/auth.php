<?php

use App\Http\Controllers\Auth\AdmissionController;
use App\Http\Controllers\Auth\ComplaintController;
use App\Http\Controllers\Auth\GatePassController;
use App\Http\Controllers\Auth\ProgramController;
use App\Http\Controllers\Auth\ReferralController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\DashboardController;
use App\Http\Controllers\Auth\AccountController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\AppointmentController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$mdlwr = include app_path('Http/MiddlewareList.php');

$itrc = [
    $mdlwr['user']['itrc'], $mdlwr['activate']
];
$student = [
    $mdlwr['user']['student'], $mdlwr['activate']
];
$prefect = [
    $mdlwr['user']['prefect'], $mdlwr['activate']
];
$faculty = [
    $mdlwr['user']['faculty'], $mdlwr['activate']
];
$nonTeachingStaff = [
    $mdlwr['user']['non_teaching_staff'], $mdlwr['activate']
];
$parent = [
    $mdlwr['user']['parent'], $mdlwr['activate']
];
$employees = [
    $mdlwr['activate']
];
$allUsers = [
    $mdlwr['auth'], $mdlwr['activate']
];


Route::middleware($itrc)->group(function() {
    Route::get('/itrc/dashboard', [DashboardController::class, 'itrcDashboard'])
         ->name('type.itrc.dashboard');

    Route::get('/itrc/accounts', [AccountController::class, 'index'])
         ->name('type.itrc.accounts');

    Route::get('/itrc/family', [RegisteredUserController::class, 'familyIndex'])
         ->name('type.itrc.family');

    Route::get('/itrc/profile/{id}', [ProfileController::class, 'index']); 

    Route::get('/itrc/accounts/register', [RegisteredUserController::class, 'index']);

    Route::post('/itrc/register', [RegisteredUserController::class, 'store']);
    Route::post('/itrc/accounts/activation/{username}', [AccountController::class, 'toggle']);
});

Route::middleware($student)->group(function() {
    Route::get('/student/dashboard', [DashboardController::class, 'studentDashboard'])
         ->name('type.student.dashboard');
    Route::get('/student/profile/{id}', [ProfileController::class, 'index']); 
    Route::get('/student/admission', [AdmissionController::class, 'index']); 
});

Route::middleware($prefect)->group(function() {
    Route::get('/prefect/dashboard', [DashboardController::class, 'prefectDashboard'])
         ->name('type.prefect.dashboard');

    Route::get('/prefect/profile/{id}', [ProfileController::class, 'index']); 
    Route::get('/prefect/complaints', [ComplaintController::class, 'index']); 
    Route::get('/prefect/referrals', [ReferralController::class, 'index']); 
    Route::get('/prefect/admissions', [AdmissionController::class, 'index']); 
    Route::get('/prefect/appointment', [AppointmentController::class, 'index']); 
    Route::get('/prefect/gatepass', [GatePassController::class, 'index']); 
    Route::get('/prefect/analytics', function() {
        return Inertia::render('prefect/analytics', [
            'user' => auth()->user()
        ]);
    }); 
});

Route::middleware($faculty)->group(function() {
    Route::get('/faculty/dashboard', [DashboardController::class, 'facultyDashboard'])
    ->name('type.faculty.dashboard');
    Route::get('/faculty/profile/{id}', [ProfileController::class, 'index']); 
    Route::get('/faculty/referral', [ReferralController::class, 'index']);
});

/*Route::middleware($programHead)->group(function() {
    Route::get('/program_head/dashboard', [DashboardController::class, 'programHeadDashboard'])
    ->name('type.program_head.dashboard');
});*/

Route::middleware($nonTeachingStaff)->group(function() {
    Route::get('/staff/dashboard', [DashboardController::class, 'nonTeachingStaffDashboard'])
         ->name('type.staff.dashboard');
    Route::get('/staff/profile/{id}', [ProfileController::class, 'index']); 
});

Route::middleware($parent)->group(function() {
    Route::get('/parent/profile/{id}', [ProfileController::class, 'index']); 
    Route::get('/parent/dashboard', [DashboardController::class, 'parentDashboard'])
    ->name('type.parent.dashboard');
    Route::get('/parent/complaint', [ComplaintController::class, 'index']);
});

Route::middleware([$mdlwr['user']['student'], $mdlwr['user']['parent']])
     ->group(function() {
    Route::get('/appointment', [AppointmentController::class, 'index']);
    Route::post('/appointment/request', [AppointmentController::class, 'storeRequest']);
});
Route::middleware($allUsers)->group(function() {
    Route::get('/complaint', [ComplaintController::class, 'index']);
    Route::post('/profile/{username}/edit', [ProfileController::class, 'update']);
    //Route::get('/gatepass', [GatePassController::class, 'index']);
    Route::get('/all-users', function() {
        $account = new User();
        return $account->allUserAccount();
    });
});
Route::middleware($employees)->group(function() {
    Route::get('/gatepass', [GatePassController::class, 'index']);
});
Route::middleware([$mdlwr['auth'], $mdlwr['activate']])
     ->post('/complaint/create', [ComplaintController::class, 'store']);
Route::middleware([$mdlwr['auth'], $mdlwr['activate']])
     ->post('/complaint/verify/{id}', [ComplaintController::class, 'confirmComplaint']);
Route::middleware([$mdlwr['auth'], $mdlwr['activate']])
     ->post('/complainant/get/{id}', [ComplaintController::class, 'get']);

/*Route::middleware($mdlwr['auth'])
->post('/activity/status', [AccountController::class, 'setActivityStatus']);*/
