import style from './Progressbar.module.css';
import { FaCalendarAlt } from "react-icons/fa";

function Progressbar(){
    return(
        <bar>
            <div className={style.title}>Progress</div>
            <div className={style.box}>
                    <div className={style.left}>
                    <FaCalendarAlt className={style.icon}/>
                    </div>
                    <div className={style.right}>
                        <h2>Design Change</h2>
                        <p>2 days ago</p>
                    </div>
            </div>
            <div className={style.box}>
                    <div className={style.left}>
                    <FaCalendarAlt className={style.icon} />
                    </div>
                    <div className={style.right}>
                        <h2>Design Change</h2>
                        <p>2 days ago</p>
                    </div>
            </div>
        </bar>
    )
}

export default Progressbar;