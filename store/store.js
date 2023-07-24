import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "@/store/reducers/products/products.slice";
import categoriesSlice from "@/store/reducers/categories/categories.slice";
import favoritesSlice from "@/store/reducers/favorites/favorites.slice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        favorites: favoritesSlice
    }
})
export default store