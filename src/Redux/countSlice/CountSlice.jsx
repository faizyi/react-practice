import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name : "Counter App",
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state,action)=>{
            state.value += action.payload
        },
        decrement : (state,action)=>{
            state.value -= action.payload
        },
        reset : (state)=>{
            state.value = 0;
        }
    }
})
export default counterSlice.reducer;
export const {increment,decrement,reset} = counterSlice.actions