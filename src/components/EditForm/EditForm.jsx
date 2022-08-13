import React from "react";
import { useState, useEffect } from "react";
import styles from "./EditForm.module.sass";

function EditForm({editValue, editTask}) {
    const [value, setValue] = useState('');

    useEffect(() => {
        getValue();
    }, [editValue]);

    const getValue = () => {
        setValue(editValue);
    };

    const clickButton = id => {
        setValue('');
        editTask(value);
    };

    return (
        <div className={styles.wrap}>
            <textarea className={styles.text}
                placeholder='Окно для редактирования'
                name='text'
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
                сохранить
            </button>
        </div>
    );
}

export default EditForm;