import React from "react";
import TodoTask from "../TodoTask/TodoTask";
import styles from "./TodoList.module.sass";

function TodoList({tasks, searchedTasks, onClickDone, deleteTask, markTask}) {
    return (
        <div className={styles.wrap}>
            { tasks.length > 0 ? 
                <div>
                    { tasks.map(task =>
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
                    </div> :
                <h5> Нет добавленных задач </h5>
            }
        </div>
    );
}

export default TodoList;