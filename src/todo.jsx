import { useState } from 'react';
import './Todo.css'; // Make sure to create this CSS file

function Todo() {
    const [tasks, setTasks] = useState({});
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const taskId = Date.now();
            setTasks(prevTasks => ({
                ...prevTasks,
                [taskId]: { text: newTask, completed: false }
            }));
            setNewTask('');
        }
    }

    const handleToggleTask = (taskId) => {
        setTasks(prevTasks => ({
            ...prevTasks,
            [taskId]: { ...prevTasks[taskId], completed: !prevTasks[taskId].completed }
        }));
    }

    const handleDeleteTask = (taskId) => {
        setTasks(prevTasks => {
            const newTasks = { ...prevTasks };
            delete newTasks[taskId];
            return newTasks;
        });
    }

    return (
        <div className="todo-container">
            <h1 className="todo-title">My Todo List</h1>
            <div className="todo-input-container">
                <input
                    type="text"
                    className="todo-input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button className="todo-add-button" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            <ul className="todo-list">
                {Object.entries(tasks).map(([id, task]) => (
                    <li key={id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleTask(id)}
                            className="todo-checkbox"
                        />
                        <span className="todo-text">{task.text}</span>
                        <button onClick={() => handleDeleteTask(id)} className="todo-delete-button">
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
