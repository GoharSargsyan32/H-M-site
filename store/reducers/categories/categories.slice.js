import {createSlice} from "@reduxjs/toolkit";
import fetchCategories from "@/store/reducers/categories/categories.api";

const categoresSlice = createSlice({
    name: "categories",
    reducers: {
        sayHi: () => {
            return "hi"
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            return {
                ...state,
                error: false,
                loading: true
            }
        })

        builder.addCase(fetchCategories.fulfilled, (state, {payload}) => {
            return {
                ...state,
                error: false,
                loading: false,
                categories: [...payload]
            }
        })

        builder.addCase(fetchCategories.rejected, (state) => {
            return {
                ...state,
                error: true,
                loading: false,
            }
        })
    },
    initialState: {
        categories: [

        ],
        loading: true,
        error: false,
    }
})

export default categoresSlice.reducer
export const categoriesSelector = state => state.categories
export const categoriesActions = categoresSlice.actions