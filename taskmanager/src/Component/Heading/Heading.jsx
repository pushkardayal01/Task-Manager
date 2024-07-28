import React from "react";
import style from './Heading.module.css';


function Heading(){
    return(
        <>
        <h2 className={style.title}> Hello User!</h2>
        <p className={style.para}>Have a nice day</p>
        </>
    )
}

export default Heading;