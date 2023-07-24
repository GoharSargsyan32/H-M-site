import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/database/databaseUtils";
import axios from "axios";

const fetchFavorites = createAsyncThunk("favorites/fetchFavorites", async () => {
    const response = await axios.get(`${api}/favorites`)

    return response.data
})

export default fetchFavorites;