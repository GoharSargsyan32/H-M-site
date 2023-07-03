import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/database/databaseUtils";
import axios from "axios";

const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await axios.get(`${api}/categories`)
    console.log(response.data)
    return response.data
})

export default fetchCategories