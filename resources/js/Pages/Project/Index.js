import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Link, Head } from '@inertiajs/inertia-react';

export default function Index(props) {

    return (
        <Authenticated
            auth={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All projects</h2>}
        >
            <Head title="Project's create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex flex-wrap">
                            {props.projects.map(project =>
                                <div
                                    className="w-60 h-60 shadow rounded m-1 p-3"
                                    key={project.id}>
                                        <Link href={route('project.tasksFromProject', {id: project.id})}>
                                            <h3 className="text-center font-bold">{project.name}</h3>
                                        </Link>
                                        <small>{project.description}</small>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
