import cls from "./item.module.scss"
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import Link from "next/link";

const Item = ({image,price,title,id,color,size}) => {
    return (
        <div className={cls.item}>
            <div className={cls.product}>
                <div className={cls.left}>
                    <img src={image} width={120} height={130}/>
                </div>

                <div className={cls.right}>
                    <h3>{title}</h3>
                    <p>{price}</p>

                    <div className={cls.description}>
                        <div>
                            <div>Art.no. Color:</div>
                            <div>{id} {color}</div>
                        </div>
                        <div>
                            <div>Size Total:</div>
                            <div>{size} {price}</div>
                        </div>
                    </div>

                    <div className={cls.fav}>
                        <div className={cls.heart}>
                            <FavoriteIcon/>
                        </div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button><img src={"/bin.svg"} width={20} height={20}/></button>
                </div>
            </div>
            <div className={cls.sum}>
                <div className={cls.discount}>
                    <div className={cls.apply}>
                        <p>Discounts</p>
                        <Link href={""}>ApplyDiscount</Link>
                    </div>
                    <div className={cls.log}>
                        <p>Log in to use your member offers!</p>
                        <button>Log In</button>
                    </div>
                </div>
                <div className={cls.top}>
                    <div className={cls.left}>
                        <p>Order Value</p>
                        <p>Shipping</p>
                    </div>
                    <div className={cls.right}>
                        <p>{price}</p>
                        <p>FREE</p>
                    </div>
                </div>
                <div className={cls.down}>
                    <div>
                        <p>Total $69.99</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item