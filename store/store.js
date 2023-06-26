import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "@/store/reducers/products/products.slice";

const store = configureStore({
    reducer: {
        products: productsSlice
    }
})
export default store