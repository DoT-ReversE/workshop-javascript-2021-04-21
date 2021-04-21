function TaskCounter( {tasks} ) {

    const activeTasks = tasks.filter( (task) => (!task.isDone));

    const remainingTaskMessage = activeTasks.length + " remaining out of " + tasks.length + " tasks";

    return (
        <div>
            <p>{remainingTaskMessage}</p>
        </div>
    );

}

export default TaskCounter;
