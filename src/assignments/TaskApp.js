import { useState } from 'react';
import TaskForm from './TaskForm';
import './TaskApp.css';

function TaskApp() {
    let taskId = 1; 

    const [tasks, setTasks] = useState([]);

    function addTask(taskName) {
        if (!taskName) {
            tasks.forEach( (task) => {
                task.active = false;
            })
            setTasks([...tasks]);
        } else {
            const newTask = {id: taskId, name: taskName, active: true};
            setTasks([...tasks, newTask]);
            taskId++;
        }
    }

    const activeTasks = tasks.filter( (task) => (task.active));

    const remainingTaskMessage = activeTasks.length + " remaining out of " + tasks.length + " tasks";

    const taskList = tasks.map((task) => (
        <li key={task.id} className={task.active ? '' : 'is-done'}>
            {task.name}
        </li>
    ));

    return (
        <div>
            <TaskForm onAdd={addTask}/>
            <p>{remainingTaskMessage}</p>
            <ul>
                {taskList}
            </ul>
        </div>
    );
}

export default TaskApp;
