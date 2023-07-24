import {createSlice} from "@reduxjs/toolkit";
import fetchFavorites from "@/store/reducers/favorites/favorites.api";

const favoritesSlice = createSlice({
    name: "favorites",
    extraReducers: (builder) => {
        builder.addCase(fetchFavorites.pending, (state) => {
            return {
                ...state,
                error: false,
                loading: true
            }
        })

        builder.addCase(fetchFavorites.fulfilled, (state, {payload}) => {
            return {
                ...state,
                error: false,
                loading: false,
                favorites: [...payload]
            }
        })

        builder.addCase(fetchFavorites.rejected, (state) => {
            return {
                ...state,
                error: true,
                loading: false,
            }
        })
    },
    initialState: {
        favorites: [

        ],
        loading: true,
        error: false,
    }
})

export default favoritesSlice.reducer
export const favoritesSelector = state => state.favorites
export const favoritesActions = favoritesSlice.actions