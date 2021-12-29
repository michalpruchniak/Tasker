import React from 'react';
import Authenticated from '@/Layouts/Authenticated';

import { Head } from '@inertiajs/inertia-react';

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
                        <div className="p-6 bg-white border-b border-gray-200">
                            {props.projects.map(project => <li key={project.id}>{project.name}</li>)}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
