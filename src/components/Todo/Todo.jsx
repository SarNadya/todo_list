import React from "react";
import styles from "./Todo.module.sass";

function Todo() {
    return (
        <div className={styles.wrap}>
            <div className={styles.list}>
                Задачи
            </div>
            <div className={styles.editing}>
                Редактирование
            </div>
        </div>
    );
}

export default Todo;