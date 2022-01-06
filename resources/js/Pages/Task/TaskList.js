import { useState } from "react";
import Details from "./Details";

export default function(props){
    const [visibledetails, setVisibledetails] = useState(false);

    const [task, setTask] = useState({
        name: '',
        description: '',
        start: '',
        end: ''
    });

   const checkVisible = (visible) => {
        setVisibledetails(visible);
   }

    const handleClick = ({name, description, start, end}) => {
        setTask({
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
            {props.tasks.map(task =>
            <li className="cursor-pointer"
                key={task.id}>
                <span onClick={
                    () => handleClick(task)}>{task.name}
                </span>
            </li>)}
        </ul>
        <Details
            task={task}
            visible={visibledetails}
            checkVisible={checkVisible}
        />
        </>
    );
}
