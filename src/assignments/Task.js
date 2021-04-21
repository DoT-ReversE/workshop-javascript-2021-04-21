function Task( {task, onClickTask} ) {

    function clickTask() {
        onClickTask(task);
    }

    return (
        <div className={task.isDone ? 'is-done' : ''} onClick={clickTask}>
            {task.name}
        </div>
    );
    
}

export default Task;
