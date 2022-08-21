import React from "react";
import EditForm from "../EditForm/EditForm";
import TodoList from "../TodoList/TodoList";
import styles from "./Todo.module.sass";

function Todo({shownTasks, onClickDone, deleteTask, markTask, editValue, editTask}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                <TodoList
                    shownTasks={shownTasks}
                    onClickDone={onClickDone}
                    deleteTask={deleteTask}
                    markTask={markTask}
                />
            </div>
            <div className={styles.editing}>
                <EditForm editValue={editValue} editTask={editTask} />
            </div>
        </div>
    );
}

export default Todo;