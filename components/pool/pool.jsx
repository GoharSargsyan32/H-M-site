import cls from "./pool.module.scss"
import Image from "next/image"

const Pool = ({image,heading,text,button}) => {
    return (
        <div className={cls.pool} style={{backgroundImage:`url(${image})`}}>
            {/* <div className={cls.blackSquare}>
                <p>$17.99</p>
                <p>Triangle Bikini Top</p>
            </div> */}
            <h1>{heading}</h1>
            <p>{text}</p>
            <button>{button}</button>
        </div>
    )

}

export default Pool