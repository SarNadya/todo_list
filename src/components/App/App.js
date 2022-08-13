import React, { useEffect, useState } from "react";
import InputForm from "../InputForm/InputForm";
import Todo from "../Todo/Todo";
import styles from "./App.module.sass";

function App() {
    const [tasks, setTasks] = useState([]);

    const [count, setCount] = useState(0);

    const [editValue, setEditValue] = useState('');

    //добавление задачи
    const addTask = value => {
        const newTasks = [
            ...tasks,
            {
                value,
                isDone: false,
                id: count + 1,
                edited: false
            }
        ];
        setTasks(newTasks);
        setCount(count + 1);
    };

    //помечаем задачу как выполненную/невыполненную
    const onClickDone = id => {
        const newTasks = tasks.map(task => {
            const newTask = { ...task };
            if (task.id === id) { newTask.isDone = !task.isDone;}
            return newTask;
        });
        setTasks(newTasks);
    }

    //удаление задачи
    const deleteTask = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        setCount( count - 1);
    }

    //помечаем задачу для редактирования и достаем value
    const markTask = id => {
        const newTasks = tasks.map(task => {
            const newTask = { ...task };
            if (task.id === id) { newTask.edited = true}
            return newTask;
        });
        const edVal = tasks[id -1].value;
        setEditValue(edVal);
        setTasks(newTasks);
    }

    //находим помеченную задачу, редактируем ее и снимаем отметку
    const editTask = value => {
        const newTasks = tasks.map(task => {
            const newTask = { ...task };
            if (task.edited === true) {
                newTask.value = value;
                newTask.edited = false;
            }
            return newTask;
        });
        setTasks(newTasks);
    }

    return (
        <div className={styles.wrap}>
            <InputForm tasks={tasks} addTask={addTask}/>
            <Todo tasks={tasks}
                onClickDone={onClickDone}
                deleteTask={deleteTask}
                markTask={markTask}
                editValue={editValue}
                editTask={editTask}
            />
        </div>
    );
}

export default App;