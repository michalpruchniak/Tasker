<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;

use App\Providers\RouteServiceProvider;

class ProjectController extends Controller
{
    public function index(){
        return Inertia::render('Project/Index', [
            'projects' => Project::all()
        ]);
    }


    public function tasksFromProject($project_id)
    {
        return Inertia::render('Task/Index', [
            'tasks' => Task::where('project_id', $project_id)->get()
        ]);
    }


    public function create(){
        return Inertia::render('Project/Create');
    }

    public function store(Request $request){
        Project::create([
            'name' => $request->name,
            'description' => $request->description
        ]);
        return redirect(RouteServiceProvider::CREATE);

    }
}
