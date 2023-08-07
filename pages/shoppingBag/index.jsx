import cls from "./shoppingBag.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {shoppingBagSelector} from "@/store/reducers/shoppingBag/shoppingBag.slice";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import Link from "next/link";
import {useEffect} from "react";
import fetchShoppingBag from "@/store/reducers/shoppingBag/shoppingBag.api";

const ShoppingBag = () => {
    const shoppingBagState = useSelector(shoppingBagSelector);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoppingBag())
    }, [])
    return (
        <div className={cls.main}>
            <h1>Shopping bag</h1>
            <div className={cls.item}>
                <div className={cls.product}>
                    <div className={cls.left}>
                        <img src={"/4.jfif"} width={120} height={130}/>
                    </div>

                    <div className={cls.right}>
                        <h3>Dress</h3>
                        <p>$ 69.99</p>

                        <div className={cls.description}>
                            <div>
                                <div>Art.no. Color:</div>
                                <div>154789984 Black</div>
                            </div>
                            <div>
                                <div>Size Total:</div>
                                <div>S $69.99</div>
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
                            <p>$69.99</p>
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
            </div>
            )
            }


            export default ShoppingBag;