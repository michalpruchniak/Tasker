import { useState } from "react";
import Details from "./Details";

export default function(props){
    const [task, setTask] = useState({
        name: '',
        description: '',
        start: '',
        end: ''
    });

    const handleClick = ({name, description, start, end}) => {
        setTask({
            name,
            description,
            start,
            end
        });
    }

    return(
        <>
        <ul>
            {props.tasks.map(task => <li key={task.id} onClick={() => handleClick(task)}>{task.name}</li>)}
        </ul>
        <Details task={task} />
        </>
    );
}
