export default function(props){
    return(
        <ul>
            {props.projects.map(project => <li key={project.id}>{project.name}</li>)}
        </ul>
    );
}
