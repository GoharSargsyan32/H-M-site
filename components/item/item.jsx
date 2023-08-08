import cls from "./item.module.scss"
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import Link from "next/link";
import {favoritesActions, favoritesSelector} from "@/store/reducers/favorites/favorites.slice";
import removeFromFavorites from "@/utils/removeFromFavorites";
import {useDispatch, useSelector} from "react-redux";
import removeFromShoppingBag from "@/utils/removeFromShoppingBag";
import ShoppingBag from "@/pages/shoppingBag";
import {shoppingBagActions, shoppingBagSelector} from "@/store/reducers/shoppingBag/shoppingBag.slice";

const Item = ({image, price, title, id, color, size}) => {
    const ShoppingBagState = useSelector(shoppingBagSelector)
    const dispatch = useDispatch()
    const removeFromShoppingBagHandler = async (e, product) => {
        e.preventDefault()
        try {
            dispatch(shoppingBagActions.removeShoppingBag(product))
            await removeFromShoppingBag(product);
        } catch (error) {
            console.error(error)
        }
    }
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
                    <button onClick={(e) => {
                        removeFromShoppingBagHandler(e, {id})
                    }}><img src={"/bin.svg"} width={20} height={20}/></button>
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