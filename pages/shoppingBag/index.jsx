import cls from "./shoppingBag.module.scss"
import {useSelector} from "react-redux";
import {shoppingBagSelector} from "@/store/reducers/shoppingBag/shoppingBag.slice";
import FavoriteIcon from "@/components/icons/FavoriteIcon/favoriteIcon";
import Link from "next/link";

const ShoppingBag = () => {
    const shoppingBagState = useSelector(shoppingBagSelector);


    return (
        <div className={cls.main}>
            <h1>Shopping bag</h1>

            </div>
            )
            }


            export default ShoppingBag;