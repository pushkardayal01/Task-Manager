import React from 'react';
import style from './Box.module.css';
import logo from '../../assets/bulb.jpg';

function Box({ task }) {
    return (
        <div className={style.boxcontainer}>
            <div className={style.title}>
                <div className={style.icon}>
                    <img className={style.logo} src={logo} alt="logo" />
                </div>
                <div className={style.heading}>
                    {task.Project}
                </div>
            </div>
            <h2>{task.Name}</h2>
            <p>{task.Created}</p>
        </div>
    );
}

export default Box;
