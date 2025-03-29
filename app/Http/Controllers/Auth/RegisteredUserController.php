<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfileController;
use App\Models\EducationBackground;
use App\Models\Family;
use App\Models\FamilyMember;
use App\Models\Staff;
use App\Models\Parents;
use App\Models\Program;
use App\Models\Student;
use App\Models\Prefect;
use App\Models\Faculty;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Http\Requests\Auth\RegisterRequest;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function index()
    {
        $student = new User();
        return Inertia::render("itrc/register", [
            'user' => auth()->user(),
            'authType' => auth()->user()[auth()->user()->user_type],
            'student' => $student->getAllStudent(),
            'program' => Program::select('id', 'description')->get()
        ]);
    }
    public function familyIndex() {
        $family = new Family();
        
        return Inertia::render('itrc/families', [
            'user' => auth()->user(),
            'family_list' => [],
            'parents' => User::where('user_type', 'parent')->get(),
            'students' => User::where('user_type', 'student')->get()
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
            //if(self::createUserAsset($request->username, $request->sex)) {
                //self::createUser($request);
                return response()->json(['success' => self::createUser($request)]);
            //}
            //return response()->json(['success' => false]);
        //return response()->json(['success' => false]);
    }
    public function familyStore(Request $request)
    {
        if($request->validate(['family_name' => 'required|alpha'])) {
            $lastId = Family::insertGetId([
                'family_name' => $request->family_name
            ]);
            $members = [];
            FamilyMember::insert($members);
        }
    }
    private function createUser($request) {
        $account = [
            'user_id' => $request->user_id,
            'user_type' => $request->user_type,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'date_of_birth' => $request->birth_date,
            'profile_picture' => "profile-{$request->username}.jpg",
            'anonymous_profile_picture' => "anonymous-profile-{$request->username}.jpg",
            'sex' => $request->sex,
            'username' => $request->username,
            'email' => $request->email,
            'contact_number' => $request->contact_number,
            'password' => Hash::make($request->password),
            'password_reset_token' => Str::random(15),
            'anonymous_name' => fake()->firstName(),
            'activate' => FALSE
        ];
        User::create($account);
        self::createUserAsset($account['username'], $account['sex']);
        switch($request->user_type) {
            case 'student':
                $field = [
                            'user_id' => $request->user_id,
                            'program_id' => $request->program,
                            'year_level' => $request->year_level
                ];
                Student::create($field);
                EducationBackground::insert(
                    [
                        ['user_id' => $request->user_id, 
                         'education_type' => 'senior_high_school'], 
                        ['user_id' => $request->user_id,
                         'education_type' => 'college'],
                    ]
                );
                break;
            case 'prefect':
                $field = [
                            'user_id' => $request->user_id,
                            'active' => FALSE,
                            'direct_action_token' => Str::random(11)
                ];
                Prefect::create($field);
                break;
            case 'faculty':
                $field = [
                            'user_id' => $request->user_id,
                            'program_id' => $request->program,
                ];
                Faculty::create($field);
                break;
            case 'program_head':
                $field = [
                            'user_id' => $request->user_id,
                            'program_id' => $request->program,
                ];
                Faculty::create($field);
                break;
            case 'staff':
                $field = [
                            'user_id' => $request->user_id,
                            'work_type' => $request->work_type
                ];
                Staff::create($field);
                break;
            case 'parent':
                $field = [
                    'user_id' => $request->user_id,
                    'parent_role' => $request->parent_role,
                    'work_occupation' => $request->work_occupation,
                ];
                Parents::create($field);
                break;
        }
        return $account;
    }
    private function createUserAsset($username, $sex) {
        $target = public_path('user-assets');
        $newFolder = "$target/$username";
        
        $profile = new ProfileController();
        $content = public_path("default-pic/profile-$sex-pic.jpg");

        $profile->createUserDirectory($newFolder);
        $imageData = file_get_contents($content);

        file_put_contents("$newFolder/profile-$username.jpg", $imageData);
    }
    public function getUserDf($file) {
        $path = public_path("dataset/user-dtst/$file");
        $lst = [];
        if (($handle = fopen($path, 'r')) !== FALSE) {
            while (($row = fgetcsv($handle, 1000, ',')) !== FALSE) {
                array_push($lst, $row);
            }
            fclose($handle);
        }
        return $lst;
    }
}
