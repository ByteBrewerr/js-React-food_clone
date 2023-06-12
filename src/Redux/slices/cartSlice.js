import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products: [],
    isVisible: false,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = action.payload
            return {...state, products:[...state.products, newProduct]}
        },
        setVisible: (state)=>{
            return {...state, isVisible: !state.isVisible}
        },
        increaseProductCount:(state, action)=>{
            const id = action.payload.id
            const countToAdd = action.payload.productCount
            const newProducts = state.products.map((product, index) => {
                if (index === id) {
                  return {
                    ...product,
                    count: product.count + countToAdd,
                    price: (product.price / product.count) * (product.count + countToAdd)
                  }
                }
                return product;
            });
            return {...state, products: newProducts}
        },
        decreaseProductCount:(state, action)=>{          
            const id = action.payload
            if(state.products[id].count>1){
                const newProducts = state.products.map((product, index) => {
                    if (index === id) {
                      return {
                        ...product,
                        count: product.count - 1,
                        price:  (product.price / product.count) * (product.count - 1)
                      }
                    }
                    return product;
                });
                return {...state, products: newProducts}
            }            
        },
        deleteProduct:(state, action)=>{
            const id = action.payload
            const newProducts = state.products.filter((_, index) => index !== id)
            if (newProducts.length === 0){
                return {...state, products: [], isVisible: false}
            }
            else{
                return {...state, products: newProducts}
            }

        }
    },
    
})

export const {addProduct, setVisible, increaseProductCount, decreaseProductCount, deleteProduct } = cartSlice.actions

export default cartSlice.reducer