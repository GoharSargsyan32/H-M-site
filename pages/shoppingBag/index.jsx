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

            </div>
            )
            }


            export default ShoppingBag;