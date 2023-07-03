import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/database/databaseUtils";
import axios from "axios";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(`${api}/products`)
    return response.data
})
export default fetchProducts