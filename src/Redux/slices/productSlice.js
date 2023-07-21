import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (category) => {
        let data = []
        await axios.get('https://636267fd66f75177ea2ea388.mockapi.io/items').then((res)=>{
            if (category !== 'Популярное') {
                data = res.data.filter(item => item.type === category)
            }
            else{
                data = res.data.filter(item => item.isPopular === true)
            }
        })
        return data
    }
);
const initialState = {
    data:[],
    isLoading:false,
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            });
    },
})


export default productSlice.reducer