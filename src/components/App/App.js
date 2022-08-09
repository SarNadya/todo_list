import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Todo from "../Todo/Todo";
import styles from "./App.module.sass";

function App() {
    const [tasks, setTasks] = useState([]);

    const [count, setCount] = useState(0);

    const addTask = value => {
        const newTasks = [
            ...tasks,
            {
                value,
                isDone: false,
                id: count + 1
            }
        ];
        setTasks(newTasks);
        setCount(count + 1);
    };

    const onClickDone = id => {
        const newTasks = tasks.map(task => {
            const newTask = { ...task };
            if (task.id === id) { newTask.isDone = !task.isDone;}
            return newTask;
        });
        setTasks(newTasks);
    }

    const deleteTask = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        setCount( count - 1);
    }

    return (
        <div className={styles.wrap}>
            <InputForm tasks={tasks} addTask={addTask}/>
            <Todo tasks={tasks} onClickDone={onClickDone} deleteTask={deleteTask}/>
        </div>
    );
}

export default App;