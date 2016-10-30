<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Meta extends Model
{
    private $table = 'metas';
    private $fillable = ['content', 'metaable_id', 'metaable_type'];
}
