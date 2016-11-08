<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    private $table = 'projects';
    private $fillable = ['title', 'content'];
}
