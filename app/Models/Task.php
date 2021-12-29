<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class Task extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'start', 'end', 'project_id'];

    public function project(){
        return $this->hasOne(Project::class);
    }
}

