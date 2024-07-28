import style from './Header.module.css';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

function Header(){
    return(
        <div className={style.navbar}>
            <div className={style.left}>
            <FaLongArrowAltLeft />
            </div>
            <div className={style.right}>
            <CiSearch />
            </div>

            <div className={style.heading}>
               <div className={style.date}>Oct , 2020</div>
               <div className={style.btn}><CiCirclePlus />Add Task</div>
                
            </div>
        </div>
    )


}

export default Header;