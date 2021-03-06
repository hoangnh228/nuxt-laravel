<?php

use Illuminate\Database\Seeder;
use App\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::truncate();

        Role::create([
            'name' => 'admin',
            'description' => 'Admin'
        ]);

        Role::create([
            'name' => 'manager',
            'description' => 'Manager'
        ]);

        Role::create([
            'name' => 'user',
            'description' => 'User'
        ]);

    }
}
