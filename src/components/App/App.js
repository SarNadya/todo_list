import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import SearchForm from "../SearchForm/SearchForm";
import Todo from "../Todo/Todo";
import styles from "./App.module.sass";

function App() {
    const [tasks, setTasks] = useState([]);

    const [count, setCount] = useState(0);

    const [editValue, setEditValue] = useState('');

    const [searchedTasks, setSearchedTasks] = useState(tasks);

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

    // реализуем поиск задачи и вывод результата в консоль
    const findTask = value => {
        const filteredTasks = [...tasks].filter(task => task.value.toLowerCase().includes(value));
        if (filteredTasks.length === 0) {
            console.log('Задачи не найдены');
        } else if (filteredTasks.length > 0) {
            console.log(filteredTasks);
        } else {
            console.log(tasks);
        }
    }

    const shownTasks = findTask();

    return (
        <div className={styles.wrap}>
            <div className={styles.forms}>
                <InputForm tasks={tasks} addTask={addTask}/>
                <SearchForm findTask={findTask}/>
            </div>
            <Todo tasks={tasks}
                searchedTasks={searchedTasks}
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