import { useState } from 'react';

function TaskForm( {onAdd} ) {

    const [taskName, setTaskName] = useState("");

    function onChange(event) {
        setTaskName(event.target.value);
    }

    function addTask() {
        console.log("Add tasks");
        onAdd(taskName);
        setTaskName("");
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={taskName}/>
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TaskForm;