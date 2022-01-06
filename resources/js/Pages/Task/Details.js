export default function Details({task, visible, checkVisible}){
    return(
        <div className={`${visible ? 'visible' : 'invisible'} fixed m-auto inset-x-0 sm:w-96 md:w-128 sm:w-24 bg-white rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl`}>
            <h2>{task.name}</h2>
            <small>{task.description}</small>
            <p className="py-2"><span>{task.start} {task.end ? task.end : ''}</span></p>
            <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer"
                onClick={
                    () => checkVisible(false)}
            >Close</span>
        </div>
    );
}
