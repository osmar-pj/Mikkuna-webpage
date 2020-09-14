<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
    protected $guarded = [];

    public function empresa() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
