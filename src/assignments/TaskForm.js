import { useState } from 'react';

function TaskForm( {onAdd} ) {

    const [taskName, setTaskName] = useState("");

    function doKey(event) {
        setTaskName(event.target.value);
    }

    function addTask() {
        console.log("Add tasks");
        onAdd(taskName);
    }

    return (
        <div>
            <input type="text" onKeyUp={doKey}/>
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default TaskForm;