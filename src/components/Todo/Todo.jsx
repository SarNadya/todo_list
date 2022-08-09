import React from "react";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.sass";

function Todo({tasks, onClickDone}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                <TodoList tasks={tasks} onClickDone={onClickDone}/>
            </div>
            <div className={styles.editing}>
                Редактирование
            </div>
        </div>
    );
}

export default Todo;