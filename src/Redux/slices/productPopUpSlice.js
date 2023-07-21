import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchToppings = createAsyncThunk(
    'productPopUp/fetchToppings',
    async () => {
        let toppings = []
        await axios.get('https://636267fd66f75177ea2ea388.mockapi.io/toppings').then((res)=>{
                toppings = res.data
        })
        return toppings
    }
);


const initialState = {
    isPopUpVisible: false,
    selectedProduct: {},
    productCount: 1,
    toppings:[],
    totalToppingPrice: 0,
    toppingsLoading:false,
    selectedProductWithToppings: {},
}
export const productPopUpSlice = createSlice({
    name: 'productPopUp',
    initialState,
    reducers: {
        setPopUpVisible: (state, action) => {
            return{
                ...state,
                totalToppingPrice: 0,
                selectedProductWithToppings: {},
                selectedProduct: action.payload,
                isPopUpVisible: true
            }        
        },
        setPopUpInvisible: (state) => {
            const newToppings = state.toppings.map((topping) => ({
              ...topping,
              count: 0,
            }));
            return {
              ...state,
              isPopUpVisible: false,
              productCount: 1,
              toppings: newToppings,
              selectedToppings:[]
            };
          },          
          increaseToppingCount: (state, action) => {
            const toppingIndex = state.toppings.findIndex(topping => topping.name === action.payload);
            const newToppings = state.toppings.map((topping, index) => {
              if (index === toppingIndex) {
                return {
                  ...topping,
                  count: topping.count + 1
                }
              }
              return topping;
            });
            const newTotalToppingPrice = state.totalToppingPrice + state.toppings[toppingIndex].price;
            return {
              ...state,
              toppings: newToppings,
              totalToppingPrice: newTotalToppingPrice
            };
          },
        decreaseToppingCount: (state, action) =>{
            const toppingIndex = state.toppings.findIndex(topping => topping.name === action.payload);
            if (state.toppings[toppingIndex].count > 0){
                const newToppings = state.toppings.map((topping, index) => {
                if (index === toppingIndex) {
                    return {
                    ...topping,
                    count: topping.count - 1
                    }
                }
                    return topping;
                });
                const newTotalToppingPrice = state.totalToppingPrice - state.toppings[toppingIndex].price 
                return {
                    ...state,
                    toppings: newToppings,
                    totalToppingPrice: newTotalToppingPrice
                }
            }
        },
        createProductWithOptions: (state) => {
            const selectedToppings = state.toppings.filter(topping => topping.count >= 1);
            const totalToppingsPrice = selectedToppings.reduce((total, topping) => {
              const cost = topping.price * topping.count;
              return total + cost;
            }, 0);
            const selectedProductWithToppings = {
              name: state.selectedProduct.name,
              count: state.productCount,
              price: (totalToppingsPrice + state.selectedProduct.price) * state.productCount, 
              toppings: selectedToppings,
              img: state.selectedProduct.img,
              description: state.selectedProduct.description,
              id: state.selectedProduct.id
            };
          
            return {
              ...state,
              selectedToppings,
              totalToppingPrice: totalToppingsPrice,
              selectedProductWithToppings
            };
          },          
        increaseCount: (state) =>{
            return {...state, productCount: state.productCount + 1}
        },
        decreaseCount: (state) =>{
            if (state.productCount > 1){
                return {...state, productCount: state.productCount - 1}
            }            
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchToppings.pending, (state) => {
                return{...state, toppingsLoading: true}
            })
            .addCase(fetchToppings.fulfilled, (state, action) => {
                return{...state, toppings: action.payload, toppingsLoading: false}
            })
            .addCase(fetchToppings.rejected, (state) => {
                alert('Ошибка, что-то пошло не так')
                return{...state, toppingsLoading: false}
            });
    },
})

export const { setPopUpVisible, setPopUpInvisible,
     increaseToppingCount, decreaseToppingCount, increaseCount,
      decreaseCount, createProductWithOptions} = productPopUpSlice.actions

export default productPopUpSlice.reducer