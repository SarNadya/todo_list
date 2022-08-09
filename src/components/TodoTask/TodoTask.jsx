import React from "react";
import classnames from 'classnames';
import styles from "./TodoTask.module.sass";

function TodoTask({value, id, isDone, onClickDone}) {
    return (
        <div className={styles.wrap}>
            <span onClick={() => onClickDone(id)} className={
                classnames({
                    [styles.task]: true,
                    [styles.done]: isDone
                })
            }>
                {value}
            </span>
        </div>
    );
}

export default TodoTask;