import {createAsyncThunk} from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await fetch("http://localhost:4200/products")
    const data = await response.json()
    return data
})
export default fetchProducts