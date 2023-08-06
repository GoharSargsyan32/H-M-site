import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/database/databaseUtils";
import axios from "axios";

const fetchShoppingBag = createAsyncThunk("shoppingBag/fetchShoppingBag", async () => {
    const response = await axios.get(`${api}/shoppingBag`)
    return response.data
})

export default fetchShoppingBag;