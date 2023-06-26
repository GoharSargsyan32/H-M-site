import {createSlice} from "@reduxjs/toolkit";
import fetchProducts from "@/store/reducers/products/products.api";

const productsSlice = createSlice({
    name: "products",
    reducers: {
        sayHi: () => {
            return "hi"
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, state => {
            return {
                ...state,
                loading: true,
            }
        })

        builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
            return {
                ...state,
                loading: false,
                products: payload
            }
        })

        builder.addCase(fetchProducts.rejected, state => {
            return {
                ...state,
                error: true
            }
        })
    },
    initialState: {
        products: {},
        loading: true,
        error: false,
    }
})

export default productsSlice.reducer
export const productsSelector = state => state.products
export const productsActions = productsSlice.actions