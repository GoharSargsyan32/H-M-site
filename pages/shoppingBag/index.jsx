import cls from "./shoppingBag.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {shoppingBagSelector} from "@/store/reducers/shoppingBag/shoppingBag.slice";
import Link from "next/link";
import {useEffect} from "react";
import fetchShoppingBag from "@/store/reducers/shoppingBag/shoppingBag.api";
import Item from "components/item/item"


const ShoppingBag = () => {
    const shoppingBagState = useSelector(shoppingBagSelector);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoppingBag())
    }, [])
    return (
        <div className={cls.main}>
            <h1>Shopping bag</h1>
            {
                shoppingBagState.shoppingBag.map(item => {
                    return <Item price={item.price} id={item.id} size={item.size} color={item.color} image={item.image} title={item.title}/>
                })
            }
        </div>
    )
}


export default ShoppingBag;