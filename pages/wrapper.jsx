import fetchProducts from "@/store/reducers/products/products.api";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const Wrapper = ({children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return children
}

export default Wrapper