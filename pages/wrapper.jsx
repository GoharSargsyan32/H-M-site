import fetchProducts from "@/store/reducers/products/products.api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import fetchCategories from "@/store/reducers/categories/categories.api";
import store from "@/store/store";
import fetchFavorites from "@/store/reducers/favorites/favorites.api";
import fetchShoppingBag from "@/store/reducers/shoppingBag/shoppingBag.api";

const Wrapper = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoppingBag())
        dispatch(fetchFavorites())
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        window.state = store.getState()
    }, [])
    return children
}

export default Wrapper