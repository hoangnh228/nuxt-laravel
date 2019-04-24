<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
     * User relationship
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
