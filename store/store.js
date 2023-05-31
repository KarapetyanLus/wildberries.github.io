import { configureStore } from "@reduxjs/toolkit";
import { allGoodsReducer } from "./slices/allGoodsSlice";
import { basketGoodReducer } from "./slices/basketGoodSlice";

const store = configureStore({
    reducer: {       
        allGoods: allGoodsReducer,
        basket: basketGoodReducer,
    }

})

export default store