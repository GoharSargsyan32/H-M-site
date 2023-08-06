import {createSlice} from "@reduxjs/toolkit";
import fetchShoppingBag from "@/store/reducers/shoppingBag/shoppingBag.api.js";

const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    reducers: {
        addShoppingBag: (state, {payload}) => {
            return {
                ...state,
                shoppingBag: [...state.shoppingBag, payload]
            }
        },

        removeShoppingBag: (state, {payload}) => {
            return {
                ...state,
                addShoppingBag: state.shoppingBag.filter(item => item.id !== payload.id)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShoppingBag.pending, (state) => {
            return {
                ...state,
                error: false,
                loading: true
            }
        })

        builder.addCase(fetchShoppingBag.fulfilled, (state, {payload}) => {
            return {
                ...state,
                error: false,
                loading: false,
                shoppingBag: [...payload]
            }
        })

        builder.addCase(fetchShoppingBag.rejected, (state) => {
            return {
                ...state,
                error: true,
                loading: false,
            }
        })
    },
    initialState: {
        shoppingBag: [

        ],
        loading: true,
        error: false,
    }
})

export default shoppingBagSlice.reducer
export const shoppingBagSelector = state => state.shoppingBag
export const shoppingBagActions = shoppingBagSlice.actions