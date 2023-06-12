import React, { useEffect } from 'react'
import {BsCart4} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, setVisible } from '../Redux/slices/cartSlice';


export default function Cart() {
    const dispatch = useDispatch()
    const selectedProduct = useSelector((state) => state.productPopUp.selectedProductWithToppings);
    const cartProducts = useSelector((state)=> state.cart.products)
    let isEmpty = Object.keys(selectedProduct).length === 0
    useEffect(()=>{
        if(!isEmpty){
            dispatch(addProduct(selectedProduct));
        }
    },[selectedProduct, isEmpty])

    let totalPrice = 0;
    cartProducts.forEach((product)=>{
        let price = product.price 
        totalPrice = totalPrice + price
    })
    return (
        <>
            <button onClick={()=>dispatch(setVisible())} className='bg-red-700 rounded-lg p-2 flex space-x-4 items-center hover:bg-red-500'>
                <BsCart4/>
                <p>{totalPrice} Р.</p>
            </button>
        </>
    )
}
