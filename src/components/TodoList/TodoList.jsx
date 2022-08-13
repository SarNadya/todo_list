import React from "react";
import TodoTask from "../TodoTask/TodoTask";
import styles from "./TodoList.module.sass";

function TodoList({tasks, onClickDone, deleteTask, markTask}) {
    return (
        <div className={styles.wrap}>
            {tasks.map(task =>
                <TodoTask
                    value={task.value}
                    isDone={task.isDone}
                    id={task.id}
                    key={task.value + task.id}
                    onClickDone={onClickDone}
                    deleteTask={deleteTask}
                    markTask={markTask}
                />
                )}
        </div>
    );
}

export default TodoList;