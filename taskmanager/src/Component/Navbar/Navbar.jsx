import React from "react";
import style from './Navbar.module.css';
import { BsList } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <BsList className={style.blockicon}/>
            </div>
            <div className={style.right}>
                <FaRegUser className={style.icons}/>
            </div>
        </div>


        
    )
}

export default Navbar;
