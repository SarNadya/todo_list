import React from "react";
import classnames from 'classnames';
import styles from "./TodoTask.module.sass";
import delete_btn from "./img/delete_btn.png";
import edit_btn from "./img/penсil.png";

function TodoTask({value, id, isDone, onClickDone, deleteTask, markTask}) {
    return (
        <div className={styles.wrap}>
            <div className={styles.checkbox} onClick={() => onClickDone(id)}>
                <input className={styles.checkbox_input}
                    type='checkbox'
                    checked={isDone}
                    id={id}
                    value={value}
                />
            </div>
            <span onClick={() => onClickDone(id)} className={
                classnames({
                    [styles.task]: true,
                    [styles.done]: isDone
                })
            }>
                {value}
            </span>
            <button className={styles.button}
                title='редактировать'
                onClick={() => markTask(id)}
            >
                <img className={styles.img_edit}
                    src={edit_btn}
                    alt='edit'
                    width='15px'
                    height='15px'
                />
            </button>
            <button className={styles.button}
                title='удалить'
                onClick={() => deleteTask(id)}
            >
                <img className={styles.img_del}
                    src={delete_btn}
                    alt='delete'
                    width='15px'
                    height='15px'
                />
            </button>
        </div>
    );
}

export default TodoTask;