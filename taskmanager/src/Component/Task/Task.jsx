import React from "react";
import style from './Task.module.css';

function Task() {
    return (
        <div className={style.container}>
            <button>My tasks</button>
            <button>In-progress</button>
            <button>Completed</button>
        </div>
    );
}

export default Task;
