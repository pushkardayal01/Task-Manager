import { CiSearch } from "react-icons/ci";
import style from './Footer.module.css';
import { MdHome } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

function Footer(){
    return(
        <>
            <div className={style.box}>
                <div className={style.icon}>
                <MdHome />
                </div>
                <div className={style.icon}>
                <IoCalendarOutline />
                </div>
                <div className={style.icon}>
                <IoIosNotificationsOutline />
                </div>
                <div className={style.icon}>
                <CiSearch />

                </div>
            </div>
        </>
    )
}


export default Footer;