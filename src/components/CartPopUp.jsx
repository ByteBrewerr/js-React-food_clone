import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisible } from '../Redux/slices/cartSlice'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom'

export default function CartPopUp() {
    const dispatch = useDispatch()
    const isVisible = useSelector((state)=>state.cart.isVisible)
    const products = useSelector((state)=> state.cart.products)
    
    return (
    <>
        {isVisible 
            ?
            <div className='absolute h-auto w-[800px] bg-gray-800 left-[39%] top-[15%] p-4 rounded-lg'>
                <div className='flex justify-between mb-3'>
                    <p className='font-bold text-2xl'>Корзина</p>
                    <button onClick={()=>{dispatch(setVisible(false))}}>X</button>
                </div>
                {products.length === 0
                    ?
                    <span>ЗДЕСЬ НИЧЕГО НЕТ</span>
                    :
                    <div>
                        <div className=' overflow-auto'>     
                            <div className='mr-4 max-h-[500px]'>           
                                {products.map((product, id)=>{              
                                    return <CartProduct
                                        key={id}
                                        id={id}
                                        name={product.name}
                                        description={product.description}
                                        img={product.img}
                                        count={product.count}
                                        toppings={product.toppings ? product.toppings : []}
                                    />             
                                })}
                            </div>    
                        </div>
                        <Link to='/order' className='block ml-auto mt-4 p-3 rounded-lg w-[150px] bg-red-700 hover:bg-red-500 '>
                            Оформить заказ
                        </Link>
                    </div>
                }
            
            </div> 
            :
            <></>  
        }   
    </>
    
  )
}
