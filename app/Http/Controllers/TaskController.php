<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;

use App\Providers\RouteServiceProvider;


class TaskController extends Controller
{
    public function index()
    {
        return Inertia::render('Task/Index', [
            'tasks' => Task::all()
        ]);
    }

    public function create($selected=null)
    {
        $projects = Project::orderBy('name')
                           ->get();

        return Inertia::render('Task/Create', [
            'projects' => $projects,
            'selected' => $selected
        ]);
    }

    public function store(Request $request)
    {
        Task::create([
            'name' => $request->name,
            'description' => $request->description,
            'start' => $request->start,
            'end' => $request->end,
            'project_id' => $request->project
        ]);

        return redirect(RouteServiceProvider::CREATE);
    }
}
