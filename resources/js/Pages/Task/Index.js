import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';

import TaskList from './TaskList'

export default function Index(props) {

return (
<Authenticated auth={props.auth} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All tasks</h2>}
    >

    <Head title="All tasks" />
    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    {props.tasks.length === 0 ?
                        <p>This project is empty or doesn't exist</p> :
                        <TaskList tasks = {props.tasks} />
                    }

                </div>
            </div>
        </div>
    </div>
</Authenticated>
);
}
