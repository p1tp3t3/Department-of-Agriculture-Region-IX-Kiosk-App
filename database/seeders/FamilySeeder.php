<?php

namespace Database\Seeders;

use App\Models\Family;
use App\Models\FamilyMember;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FamilySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    private $famId;
    public function run(): void
    {
        /*Family::factory(2)->create()->each(function($fam) {
            self::setFamId($fam->family_id);
            FamilyMember::factory(6)->create()->each(function($famM) {
                $famM->family_id = self::getFamId();
                $parent = User::select('user_id')
                              ->where('user_type', 'parent')
                              ->get();
                $child = User::select('user_id')
                             ->where('user_type', 'student')
                             ->get();
                $p = 0;
                $c = 0;
                if($p < 2 || $c < 2) {
                    $famM->parent_id = $parent[$p]['user_id'];
                }
                $famM->child_id = $child[$c]['user_id'];
                $famM->save();
                $c++;
            });
        });*/
    }
    private function setFamId($s)
    {
        $this->famId = $s;
    }
    private function getFamId():string 
    {
        return $this->famId;
    }
}
