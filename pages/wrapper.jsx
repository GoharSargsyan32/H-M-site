import fetchProducts from "@/store/reducers/products/products.api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import fetchCategories from "@/store/reducers/categories/categories.api";

const Wrapper = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }, [])
    return children
}

export default Wrapper