import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ProductsApi = createAsyncThunk('api/allproducts', async () => {
    const res = await axios.get(`https://dummyjson.com/products`)
    return res.data.products
})
export const ProductsWomenApi = createAsyncThunk('api/womenproducts', async () => {
    const res = await axios.get(`https://dummyjson.com/products/category/womens-dresses`)
    return res.data.products
})
export const ProductsMenApi = createAsyncThunk('api/menproducts', async () => {
    const res = await axios.get(`https://dummyjson.com/products/category/mens-shirts`)
    return res.data.products
})

export const Api = createSlice({
    name: 'products',
    initialState: {
        alldata : [],
        Womendata: [],
        Mendata: [],
    },
    reducers: {

    },
    extraReducers: {
        [ProductsApi.pending]: (state) => {
            // alert()
        },
        [ProductsApi.fulfilled]: (state, { payload }) => {
            state.alldata = payload
        },
        [ProductsApi.rejected]: (state, { payload }) => {
            console.log(payload);
        },
        [ProductsWomenApi.pending]: (state) => {
            // alert()
        },
        [ProductsWomenApi.fulfilled]: (state, { payload }) => {
            state.Womendata = payload
        },
        [ProductsWomenApi.rejected]: (state, { payload }) => {
            console.log(payload);
        },
        [ProductsMenApi.pending]: (state) => {

        },
        [ProductsMenApi.fulfilled]: (state, { payload }) => {
            state.Mendata = payload
        },
        [ProductsMenApi.rejected]: (state, { payload }) => {
            console.log(payload);
        }
    }
})

