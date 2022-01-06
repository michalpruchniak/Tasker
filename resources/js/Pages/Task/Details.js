export default function Details({task}){
    return(
        <div className="fixed m-auto inset-x-0 sm:w-96 md:w-128 sm:w-24 bg-white rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">
            <h2>{task.name}</h2>
            <small>{task.description}</small>
            <span>{task.start} {task.end ? task.end : ''}</span>
        </div>
    );
}
