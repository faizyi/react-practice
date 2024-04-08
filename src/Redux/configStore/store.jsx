import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../countSlice/CountSlice'
export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})