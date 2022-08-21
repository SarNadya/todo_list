import React from "react";
import { useState } from "react";
import styles from "./InputForm.module.sass";

function InputForm({addTask}) {
    const [value, setValue] = useState('');

    const clickButton = () => {
        setValue('');
        addTask(value);
    };

    return (
        <div className={styles.wrap}>
            <input className={styles.input}
                type='text'
                placeholder='Добавить задачу'
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