import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';

export const STATUSES = {
    IDLE: "Idle",
    LOADING: "loading",
    ERROR: "error"
}
const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    // const dispatch = useDispatch();
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks [ RTK thunk]
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});
// Normal thunk
// export function fetchproducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             await axios.get("https://fakestoreapi.com/products")
//                 .then((res) => dispatch(setProducts(res?.data)));
//             dispatch(setStatus(STATUSES.IDLE));


//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }