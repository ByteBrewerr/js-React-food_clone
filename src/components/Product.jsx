import React from 'react';
import {useDispatch} from "react-redux";
import {setPopUpVisible } from '../Redux/slices/productPopUpSlice';
import {addProduct} from "../Redux/slices/cartSlice";
import { toast } from "react-toastify";
import { increaseProductCount } from '../Redux/slices/cartSlice';
import useCart from '../hooks/use-cart';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

const Product = ({img, name, description, price, quantity, type, toppings}) => {
    const dispatch = useDispatch()  


    const { isInCart, id } = useCart({name, toppings});
    const {isAuth} = useAuth()

    const navigate = useNavigate()

    const haveOptionButton = type==='Бургеры'
    


    const handleAddToCart = () => {
        if (!isInCart){
            dispatch(addProduct({
                name: name,
                count: 1,
                price: price,
                toppings: [],
                img: img,
                description: description,
            }));      
        }
        else{
            dispatch(increaseProductCount({id, productCount: 1}))
        }
        toast(`1x ${name} добавлен в корзину`)
    }

    return (
        <div className='w-100 bg-gray-700  mt-4 rounded-lg'>
            <img className='w-100 rounded-t-lg cursor-pointer h-[172.5px]' src={img} alt=""/>
            <div className='px-4 py-4 border-b-2 h-[200px]'>
                <div className='h-[110px]'>
                    <p className='text-lg mb-4'>{name}</p>
                    <p className='text-xs'>{description}</p>
                </div>
                <div className=' flex justify-between items-center mt-4'>
                    <p>{quantity}</p>
                    {haveOptionButton
                        ? 
                        <button onClick={isAuth ? ()=>dispatch(setPopUpVisible({img, name, description, price, quantity, toppings})) : ()=>navigate('/register')} className='bg-red-500 p-2 rounded-lg'>
                            Опции
                        </button>
                        :
                        <></>
                    }                         
                </div>
            </div>
            <div className='flex justify-between items-center px-4 py-4'>
                <p className='text-red-400 text-xl font-bold'>{price} Р</p>
                <button onClick={isAuth ? ()=>handleAddToCart() : ()=>navigate('/register')}>В КОРЗИНУ</button>
            </div>
        </div>
        
    );
};

export default Product;