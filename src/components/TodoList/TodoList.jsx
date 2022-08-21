import React from "react";
import TodoTask from "../TodoTask/TodoTask";
import styles from "./TodoList.module.sass";

function TodoList({shownTasks, onClickDone, deleteTask, markTask}) {
    return (
        <div className={styles.wrap}>
            { shownTasks.length > 0 ? 
                <div>
                    { shownTasks.map(task =>
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
                </div> : shownTasks.length === 0 ?
                <h5> Задачи не найдены </h5> :
                <h5> Нет добавленных задач </h5>
            }
        </div>
    );
}

export default TodoList;