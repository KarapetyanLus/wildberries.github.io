import addProduct from "@/pages/addProduct";
import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./allGoods.api";


const basketGood = createSlice({
    name: "basket",
    reducers: {
        increment: (state) => {
            return {
                ...state,
                count: state.count + 1
            }
        },
        removeProduct: (state, {payload}) => {
            const item = state.data.find(item => item.id === payload)
            item.count + 1
            console.log(item, payload)
        },
        addProduct: (state) => {
            return {
                ...state,
                addProduct: state.addProduct + 1
            }

        },
        selected: (state, { payload }) => {
            state.selected.push(payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            const obj = []
            for (let item of payload) {
                for (let i of state.selected) {
                    if (item.id == i) {
                        const good = {
                            ...item,
                            count: 1
                        }
                        obj.push(good)
                    }
                }
            }
            return {
                ...state,
                data: [...obj]
            }
        })
    },

    initialState: {
        count: 0,
        selected: [],
        data: [],
    }
})

export const basketGoodActions = basketGood.actions
export const basketGoodReducer = basketGood.reducer
export const basketSelector = state => state.basket