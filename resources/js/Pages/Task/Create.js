import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';

import Input from '@/Components/Input';
import Label from '@/Components/Label';
import List from '@/Components/List';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import moment from 'moment';

export default function Register(props) {
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        start: new Date(),
        end: '',
        project: props.selected
    });
    const [startDate, setStartDate] = useState(new Date());
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('tasks.store'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create task</h2>}
        >
            <Head title="Task's create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />

                            <form onSubmit={submit}>
                                <div>
                                    <Label forInput="name" value="Task's name" />

                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="description" value="Description" />

                                    <Input
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        handleChange={onHandleChange}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="start" value="start" />
                                        <DatePicker name="start" showTimeSelect dateFormat="Pp" selected={data.start} onChange={(date) => setData('start', date)} />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="end" value="end" />
                                        <DatePicker selected={data.end} showTimeSelect dateFormat="Pp" onChange={(date) => setData('end', date)} />

                                </div>

                                <div className="mt-4">
                                    <Label forInput="project" value="project" />

                                    <List
                                        type="text"
                                        name="project"
                                        value={data.project}
                                        className="mt-1 block w-full"
                                        autoComplete="project"
                                        options={props.projects}
                                        selected={props.selected}
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4">
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
