<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Exception;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;


class ProfileController extends Controller
{
    protected $apiKey = [
        'pexels' => 'tXInTzEb1j3w0U1sEosQn6vWS7wfFmW53IihHaZ2jL2GkNYpKDKRZqKf'
    ];
    private $src;

    public function index($id) {
        $account = new User();

        return Inertia::render('other/profile', [
            'user' => auth()->user(),
            'otherUserProfile' => $account->findAccount($id)
        ]);
    }   
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        $account = self::getUserFields($request);
        //if($request->validated()) {
            //$resizeProfile = imagescale($request->file('image')->getFilename(), 600, 600);
            /*
            $username = auth()->user()->username;
            self::updatePicture(
                public_path("user-assets/$username/profile-$username.jpg"), 
                []
            );*/
            //$request->user()->save();
        //}
        User::where('username', auth()->user()->username)
            ->update($account);
        self::updateProfilePicture($request);
    }
    public function getPicture($query) {
        $response = Http::withHeaders([
            'Authorization' => $this->apiKey['pexels']
        ])->get('https://api.pexels.com/v1/search', [
            'query' => $query,
            'per_page' => 15,
            'page' => 1
        ]);
        return $response->json();
    }
    public function generatePicture($username, $userFolder, $photo, $seed = true) {
        $rand = ($seed) ? random_int(0, sizeof($photo['photos']) - 1) : 0;
        $src = ($seed) ? $photo['photos'][$rand]['src']['original'] : $photo;

        self::createUserDirectory($userFolder);
        self::createPicture($src, "$username/profile-$username.jpg");
    }
    public function createUserDirectory($folder) {
        File::makeDirectory($folder, 0755, true);
        File::makeDirectory("$folder/complaints", 0755, true);
        File::makeDirectory("$folder/gatepasses", 0755, true);
    }
    public function createPicture($src, $fileName) {
        $imgContent = file_get_contents($src);

        $image = imagecreatefromstring($imgContent);

        $resizedImage = imagescale($image, 600, 600);

        $filePath = public_path("user-assets/$fileName");
        imagejpeg($resizedImage, $filePath);

        imagedestroy($image);
        imagedestroy($resizedImage);
    }
    public function generateQRCode($path, $data) {
        //$qr = new QrCode($data, new Encoding('UTF-8'), size: 600);

        //$writer = new PngWriter();
        //$res = $writer->write($qr);
        //$res->saveToFile(public_path($path));
    }
    public function updateProfilePicture($request) {
        $usr = auth()->user()->username;
        $targetPicture = public_path("user-assets/$usr/profile-$usr.jpg");
        
        if(File::exists($targetPicture) && $request->hasFile('profile_picture')) {
            $content = $request->file('profile_picture')
                               ->getContent();
            File::put($targetPicture, $content);
        }
    }
    public function updateEducationBackground(Request $request) {
        
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function getUserFields($request) {
        $currentAddress = "{$request->current_place},{$request->current_city},{$request->current_province},{$request->current_zipcode}";
        $permanentAddress = "{$request->permanent_place},{$request->permanent_city},{$request->permanent_province},{$request->permanent_zipcode}";

        return [
            'bio_description' => $request->bio_description,
            'email' => $request->email,
            'contact_number' => $request->phone_number,
            'current_address' => $currentAddress,
            'permanent_address' => $permanentAddress
        ];
    }
    public function setSrc($s) {
        $this->src = $s;
    }
    public function getSrc() {
        $rand = random_int(0, sizeof($this->src['photos']) - 1);
        return $this->src['photos'][$rand]['src']['original'];
    }
}
