import axios from "axios";
import { useState } from "react/cjs/react.development";
export default function Details({task, visible, checkVisible, completeTask}){
    const [complete, setComplete] = useState(task.complete);
    const toggleComplete = (id) => {
        axios.get('http://localhost/tasks/toggle-complete/' + id)
             .then(result => {
                 setComplete(result.data);
                 completeTask(id, result.data);
             });
    }
    return(
        <div className={`${visible ? 'visible' : 'invisible'} fixed z-20 h-1/2 w-1/2 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm overflow-y-auto px-6 py-8 rounded-lg ring-1 ring-gray-900/5 shadow-xl`}>
            <h2>{task.name}</h2>
            <div><span className="bg-transparent hover:bg-blue-500 text-blue-200 font-semibold hover:text-white py-1 px-1 border border-blue-500 hover:border-transparent rounded text-sm cursor-pointer"
                onClick={
                    () => toggleComplete(task.id)}
            >{complete == true ? 'Complete' : 'Uncomplete'}{complete}</span></div>
            <small>{task.description}</small>
            <p className="py-2"><span>{task.start} {task.end ? task.end : ''}</span></p>
            <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
                onClick={
                    () => checkVisible(false)}
            >Close</span>
        </div>
    );
}
