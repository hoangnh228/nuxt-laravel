<?php

use Illuminate\Database\Seeder;
use App\Role;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $role_admin = Role::where('name', 'admin')->first();
        $role_manager = Role::where('name', 'manager')->first();
        $role_user = Role::where('name', 'user')->first();

        $admin = User::create([
            "name" => "Administrator",
            "email" => "admin@ebaymanager.com",
            "password" => bcrypt("123456")
        ]);

        $manager = User::create([
            "name" => "Manager",
            "email" => "manager@ebaymanager.com",
            "password" => bcrypt("123456")
        ]);

        $user = User::create([
            "name" => "User",
            "email" => "user@ebaymanager.com",
            "password" => bcrypt("123456")
        ]);

        $admin->roles()->attach($role_admin);
        $manager->roles()->attach($role_manager);
        $user->roles()->attach($role_user);

        factory(App\User::class, 50)->create()->each(function ($user) use ($role_user) {
            $user->roles()->attach($role_user);
        });
    }
}
