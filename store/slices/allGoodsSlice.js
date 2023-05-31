import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./allGoods.api";
import { fetchData2 } from "./allGoods.api";


const allGoods = createSlice({
    name: "allGoods",
    reducers: { 
        changeCurrency: (state, {payload}) => {
            return {
                ...state,
                currency: payload
            }
        }
    },    
    extraReducers: (builder) => {
        builder.addCase(fetchData2.pending, (state) => {
            return {
                ...state,
                loading: true,
            }
        })

        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            return {
                ...state,
                data: [...payload],
                loading: false,
            }
        })
        
        builder.addCase(fetchData2.fulfilled, (state, { payload }) => {
            return {
                ...state,
                data2: [...payload],
                loading: false,
            }
        })

    },

    initialState: {
        data: [],
        data2: [],
        loading: true,
        currency: ''
    }
})

export const allGoodsSelector = state => state.allGoods
export const allGoodsReducer = allGoods.reducer
export const allGoodsActions = allGoods.actions