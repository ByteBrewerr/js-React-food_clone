import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVisible } from '../Redux/slices/cartSlice'
import CartProduct from './CartProduct'

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
                    <div>ЗДЕСЬ НИЧЕГО НЕТ</div>
                    :
                    <></>
                }
                {products.map((product, id)=>{
                    if (product.toppings) {
                        return <CartProduct
                            key={id}
                            id={id}
                            name={product.name}
                            description={product.description}
                            img={product.img}
                            count={product.count}
                            toppings={product.toppings}
                        />
                    }
                    else {
                        return <CartProduct
                            key={id}
                            id={id}
                            name={product.name}
                            description={product.description}
                            img={product.img}
                            count={product.count}
                            toppings={[]}
                        />
                    }
                })}
            </div> 
            :
            <></>  
        }   
    </>
    
  )
}
