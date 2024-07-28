import React from "react";
import style from './Blankbox.module.css';
import { FaLongArrowAltRight } from "react-icons/fa";

function Blankbox(){
    return(
        <div className={style.boxcontainer}>
            <button>Add Project <FaLongArrowAltRight /></button>
        </div>
    )

}

export default Blankbox;