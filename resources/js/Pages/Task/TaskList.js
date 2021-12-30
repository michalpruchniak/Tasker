export default function(props){
    return(
        <ul>
            {props.tasks.map(task => <li key={task.id}>{task.name}</li>)}
        </ul>
    );
}
