import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "@/store/reducers/products/products.slice";
import categoriesSlice from "@/store/reducers/categories/categories.slice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice
    }
})
export default store