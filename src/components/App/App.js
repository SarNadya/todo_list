import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Todo from "../Todo/Todo";

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

    return (
        <div>
            <InputForm tasks={tasks} addTask={addTask}/>
            <Todo tasks={tasks} onClickDone={onClickDone}/>
        </div>
    );
}

export default App;