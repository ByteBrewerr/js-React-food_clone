import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPopUpInvisible, createProductWithOptions} from "../Redux/slices/productPopUpSlice";
import Topping from './Topping';
import { IoIosAdd, IoIosRemove } from 'react-icons/io';
import { increaseCount } from '../Redux/slices/productPopUpSlice';
import { decreaseCount } from '../Redux/slices/productPopUpSlice';
import { toast } from "react-toastify";
import useCart from '../hooks/use-cart';
import { increaseProductCount } from '../Redux/slices/cartSlice';



const ProductPopUp = () => {
  const dispatch = useDispatch()
    const isPopUpVisible = useSelector((state) => state.productPopUp.isPopUpVisible);
    const selectedProduct = useSelector((state) => state.productPopUp.selectedProduct);
    const toppings = useSelector((state) => state.productPopUp.toppings);
    const productCount = useSelector((state) => state.productPopUp.productCount);
    const totalToppingPrice = useSelector((state)=> state.productPopUp.totalToppingPrice)

    const selectedToppings = toppings.filter(topping => topping.count >= 1);

    const { isInCart, id } = useCart({name: selectedProduct.name, toppings: selectedToppings});

    const priceCalculate = ()=>{
      return (selectedProduct.price + totalToppingPrice) * productCount
    }
    const addProductToCart = () => {

      if (!isInCart){
        dispatch(createProductWithOptions());
      }
      else{
         dispatch(increaseProductCount({id, productCount}))
      }
      dispatch(setPopUpInvisible());
      toast(`${productCount}x ${selectedProduct.name} добавлен в корзину`)     
    };
    
    
    return (
      <>
        {isPopUpVisible && (
          <>
            <div className='fixed top-0 left-0 w-full h-[100%] overflow-auto bg-black bg-opacity-80'>     
              <div className='bg-gray-500 absolute top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[40%] h-100 rounded-lg p-5'>
                <button className='absolute top-[0%] left-[100%] font-bold text-2xl' onClick={()=>dispatch(setPopUpInvisible())}>
                    X
                </button>      
                <img className='mb-2 rounded-lg' src={selectedProduct.img} alt="img" />
                <div className='flex-row space-y-2'>
                  <div className='font-bold'>{selectedProduct.name}</div>
                  <div>{selectedProduct.description}</div>
                  <div>{selectedProduct.quantity}</div>
                  <div className='flex justify-between text-black'>
                    <p>Сумма</p>
                    <p>Кол-во</p>
                  </div>
                  <div className='flex justify-between font-bold '>
                    <div className='text-red-500'>{selectedProduct.price} р.</div>
                    <div className='flex space-x-3'>
                        <button onClick={()=>dispatch(decreaseCount())} className='bg-red-700 px-1 rounded-lg hover:scale-[95%] transition-transform active:scale-[85%]'>
                          <IoIosRemove size={25}/>
                        </button>
                        <span>{productCount}</span>
                        <button onClick={()=>dispatch(increaseCount())} className='bg-red-700 px-1 rounded-lg hover:scale-[95%] transition-transform active:scale-[85%]'>
                          <IoIosAdd size={25}/>
                        </button>
                    </div>
                  </div>
                  <div className='border-b-[1px]'></div>
                  <div  className='grid grid-cols-2 gap-x-8 gap-y-4'>
                    {toppings.map((topping)=>(
                        <Topping key={topping.id} name={topping.name} price={topping.price} count={topping.count}/>                   
                    ))}                               
                  </div>
                </div>
             
                <div className='flex justify-center mt-4'>
                  <button onClick={()=>addProductToCart()} className='bg-red-900 p-2 rounded-lg w-[80%]'>
                    <p>ДОБАВИТЬ ТОВАР НА {priceCalculate()} Р.</p>
                  </button>
                </div>
                
              </div>
            </div>    
          </>
        )}
      </>
    );
  };

export default ProductPopUp;
