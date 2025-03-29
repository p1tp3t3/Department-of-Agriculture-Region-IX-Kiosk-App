<?php

namespace Database\Seeders;

use App\Models\Faculty;
use App\Models\Staff;
use App\Models\Parents;
use App\Models\Student;
use App\Models\Prefect;
use App\Models\ITRC;
use App\Models\User;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    private $id, $m, $type, $count;
    public function run(): void
    {
        $user = self::userList();

        foreach($user as $key => $model) {
            self::setModel($model['model']);
            self::setType($key);
            self::setCount($model['count']);

            User::factory(self::getCount())->create()->each(function ($usr) {
                self::setId($usr->user_id);
                $usr->user_type = self::getType();
                $usr->save();
                if(self::getModel() != null) {
                    self::getModel()::factory()->create([
                        'user_id' => self::getId()
                    ]);
                }
            });
        }
    }
    private function setId($s) 
    {
        $this->id = $s;
    }
    private function setType($s)
    {
        $this->type = $s;
    }
    private function setModel($s)
    {
        $this->m = $s;
    }
    private function setCount($s)
    {
        $this->count = $s;
    }
    private function getId():string 
    {
        return $this->id;
    }
    private function getType():string
    {
        return $this->type;
    }
    private function getModel() 
    {
        return $this->m;
    }
    private function getCount()
    {
        return $this->count;
    }
    private function userList() 
    {
        return [
            'student' => [
                'model' => Student::class,
                'count' => 10 
            ], 
            'parent' => [
                'model' => Parents::class,
                'count' => 5
            ],
            'itrc' => [
                'model' => ITRC::class,
                'count' => 1
            ],
            'prefect' => [
                'model' => Prefect::class,
                'count' => 1
            ],
            'faculty' => [
                'model' => Faculty::class,
                'count' => 10
            ],
            'staff' => [
                'model' => Staff::class,
                'count' => 10
            ]
        ];
    }
}
