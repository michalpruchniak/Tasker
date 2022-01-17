import { useEffect, useState } from "react";
import Details from "./Details";

export default function(props){
    const [visibledetails, setVisibledetails] = useState(false);
    const tasks = props.tasks;

    const [task, setTask] = useState({
        name: '',
        description: '',
        start: '',
        end: ''
    });

   const checkVisible = (visible) => {
        setVisibledetails(visible);
   }

   const completeTask = (id, complete) => {
       console.log(id, complete);
       const objIndex = tasks.findIndex((obj => obj.id == id));
       tasks[objIndex].complete = tasks[objIndex].complete == 1 ? 0 : 1;
   }

    const handleClick = ({id, name, description, start, end}) => {
        setTask({
            id,
            name,
            description,
            start,
            end
        });
        setVisibledetails(true);
    }

    return(
        <>
        <ul>
            {tasks.map(task => (
            <li className={`cursor-pointer p-2 my-2 border-4 border-indigo-500/100 ${task.complete == 1 ? 'bg-green-300' : 'bg-green'}`}
                key={task.id}
                onClick={
                    () => handleClick(task)}
            >
            <span>{task.name}</span>
            </li>)
            )
}
        </ul>

        <Details
            task={task}
            visible={visibledetails}
            checkVisible={checkVisible}
            completeTask={completeTask}
        />
        </>
    );
}
