import React from "react";
import { useState } from "react";
import styles from "./InputForm.module.sass";

function InputForm({tasks, addTask}) {
    const [value, setValue] = useState('');

    const clickButton = () => {
        setValue('')
        addTask(value)
    };

    return (
        <div className={styles.wrap}>
            <input className={styles.input}
                type='text'
                label='Введите задачу'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        clickButton()
                    }
                }}
            />
            <button className={styles.button}
                type='submit'
                onClick={clickButton}
            >
                +
            </button>
        </div>
    );
}

export default InputForm;