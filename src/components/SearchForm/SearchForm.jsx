import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./SearchForm.module.sass";

function SearchForm({findTask}) {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        findTask(searchQuery);
    }, [searchQuery]);

    return (
        <div className={styles.wrap}>
            <input className={styles.input}
                placeholder='Поиск задачи'
                value={searchQuery}
                //добавляем обработчики события
                onChange={event => setSearchQuery(event.target.value)}
            />
        </div>
    );
}

export default SearchForm;