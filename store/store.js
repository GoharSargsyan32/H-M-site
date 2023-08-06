import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "@/store/reducers/products/products.slice";
import categoriesSlice from "@/store/reducers/categories/categories.slice";
import favoritesSlice from "@/store/reducers/favorites/favorites.slice";
import shoppingBagSlice from "@/store/reducers/shoppingBag/shoppingBag.slice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        favorites: favoritesSlice,
        shoppingBag: shoppingBagSlice
    }
})


export default store