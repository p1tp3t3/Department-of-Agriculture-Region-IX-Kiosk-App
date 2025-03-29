<?php

namespace Database\Factories;

use App\Http\Controllers\ProfileController;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = [
            'frstnm' => fake()->firstName(), 
            'mdlnm' => fake()->lastName(), 
            'lstnm' => fake()->lastName()
        ];
        $dob = fake()->date('1999-01-01', now());

        $username = str_replace('.', '', fake()->userName());
        $userFolder = public_path("user-assets/$username");
        
        $sex = (fake()->randomElement(['m', 'f']) != 'm') ? 'woman' : 'man';
        
        $profile = new ProfileController();

        $photo = $profile->getPicture("$sex enjoying themselves alone in the night");
        $profile->generatePicture($username, $userFolder, $photo);

        $anonymousPhoto = $profile->getPicture("random anonymous $sex hacker");
        $profile->setSrc($anonymousPhoto);

        $profile->createPicture($profile->getSrc(), "$username/anonymous-profile-$username.jpg");

        return [
            'user_id' => Str::random(15),
            'first_name' => $name['frstnm'],
            'middle_name' => $name['mdlnm'],
            'last_name' => $name['lstnm'],
            'anonymous_name' => fake()->name(),
            'date_of_birth' => $dob,
            'user_type' => 'student',
            'sex' => fake()->randomElement(['m', 'f']),
            'bio_description' => fake()->paragraph(8),
            'profile_picture' => "profile-$username.jpg",
            'anonymous_profile_picture' => "anonymous-profile-$username.jpg",
            'civil_status' => fake()->randomElement(['single', 'in_relationship', 'married']),
            'religion' => fake()->randomElement(['catholic', 'christian', 'muslim']),
            'citizenship' => fake()->randomElement(['filipino', 'american', 'chinese', 'british']),
            'current_address' => fake()->address(),
            'permanent_address' => fake()->address(),
            'email' => fake()->unique()->safeEmail(),
            'contact_number' => "09".fake()->numberBetween(100000000, 999999999),
            'username' => $username,
            'password' => Hash::make('password'),
            'activate' => TRUE,
            'remember_token' => Str::random(10),
            'password_reset_token' => Str::random(8)
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    /*public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }*/
}
