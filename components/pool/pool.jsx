import cls from "./pool.module.scss"
import Image from "next/image"

const Pool = () => {
    return (
        <div className={cls.pool}>
            <div className={cls.blackSquare}>
                <p>$17.99</p>
                <p>Triangle Bikini Top</p>
            </div>
            <h1>Welcome to the pool patry</h1>
            <button>Shop now</button>
        </div>
    )

}

export default Pool