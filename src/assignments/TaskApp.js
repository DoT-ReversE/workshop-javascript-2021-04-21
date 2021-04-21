import { useState } from 'react';
import TaskForm from './TaskForm';
import './TaskApp.css';
import TaskCounter from './TaskCounter';
import Task from './Task';
let taskId = 1; 

function TaskApp() {
    const [tasks, setTasks] = useState([]);

    function addTask(taskName) {
        if (taskName) {
            const newTask = {id: taskId, name: taskName, isDone: false};
            setTasks([...tasks, newTask]);
            taskId++;
        }
    }

    function onClickTask(task) {
        task.isDone = !task.isDone;
        setTasks([...tasks]);
    }

    const taskList = tasks.map((task) => (
        <li key={task.id}>
            <Task task={task} onClickTask={onClickTask}/>
        </li>
    ));

    return (
        <div>
            <TaskForm onAdd={addTask} />
            <TaskCounter tasks={tasks} />
            <ul>
                {taskList}
            </ul>
        </div>
    );
}

export default TaskApp;
