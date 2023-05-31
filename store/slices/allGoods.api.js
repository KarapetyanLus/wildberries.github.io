import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("allGoods/fetchData", async function(){
    const response = await axios.get("http://localhost:4200/product")
    const data = response.data
    return data
})

export const fetchData2 = createAsyncThunk("allGoods/fetchData2", async function(){
    const response = await axios.get("http://localhost:4200/goods")
    const data2 = response.data
    return data2
})