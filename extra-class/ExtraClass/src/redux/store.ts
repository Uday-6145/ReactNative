import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./reducers/HomeReducer"
import CartReducer from  "./reducers/CardReducer"


export const store = configureStore({
    reducer: {
        HomeReducer,
        CartReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>