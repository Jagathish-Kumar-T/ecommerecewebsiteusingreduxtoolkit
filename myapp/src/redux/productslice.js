import {createSlice} from "@reduxjs/toolkit";
// const initialState =  [];

const status = {
    IDLE:"Idle",
    LOADING:"loading",
    ERROR:"error"
}

const productSlice = createSlice({
name:'product',
initialState:{
    data : [],
    status : '',
},
reducers:{
    setProducts(state,action)
    {
    state.data = action.payload;
    },
    remove(state,action)
    {
    return state.filter((data)=>data.id!==action.payload)
    }
}
})

// export const {add,remove} = cartSlice.actions;
export default productSlice.reducer;