<?php

namespace App\Http\Controllers;

use Carbon\Carbon;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Task;

use App\Providers\RouteServiceProvider;
use App\Http\Requests\TaskRequest;


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

    public function store(TaskRequest $request)
    {
        Task::create([
            'name' => $request->name,
            'description' => $request->description,
            'start' => Carbon::parse($request->start)->format('Y-m-d'),
            'end' => Carbon::parse($request->end)->format('Y-m-d'),
            'project_id' => $request->project
        ]);

        return redirect(RouteServiceProvider::CREATE);
    }

    public function toggleComplete($id){
        $task = Task::find($id);
        $task->complete = !$task->complete;
        $task->save();
    }
}
