import React from 'react'
import { IoIosAdd } from 'react-icons/io';
import { IoIosRemove } from 'react-icons/io';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseProductCount, increaseProductCount,deleteProduct } from '../Redux/slices/cartSlice';

export default function CartProduct({name, description, img, toppings, id}) {
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.cart.products[id].count)
  const price = useSelector((state)=> state.cart.products[id].price)
  let toppingsString = ''

  return (
    <div className='flex border-b-[1px] border-gray-500 justify-between'>
      <div className='flex items-center pb-4 mt-4'>
        <img className='rounded-full w-[65px] h-[65px]' src={img} alt="" /> 
        <div className='flex flex-col ml-4 space-y-2'>
          <span className='font-bold text-lg'>
            {name}
          </span>
          <span className='text-xs text-gray-400'>
            {toppings.map((topping)=>{
              let char = ','
              if (toppings[toppings.length-1]===topping){
                char = '.'
              }
              toppingsString = `${topping.count}x ${topping.name}${char} `
              return (
                <span key={topping.id}>{toppingsString}</span>          
              )                   
              })}   
          </span>
          <span className='text-xs text-gray-400'>
            {description}
          </span>
        </div>
      </div>
        <div className='flex space-x-2 items-center'>
          <button onClick={()=>{dispatch(decreaseProductCount(id))}} className='bg-red-700 px-1 rounded-full hover:scale-[95%] transition-transform active:scale-[85%]'>
            <IoIosRemove size={15}/>
          </button>
          <span>
            {count}
          </span>
          <button onClick={()=>{dispatch(increaseProductCount(id))}} className='bg-red-700 px-1 rounded-full hover:scale-[95%] transition-transform active:scale-[85%]'>
            <IoIosAdd size={15}/>
          </button>

          <span>{price}</span>

          <button onClick={()=>{dispatch(deleteProduct(id))}} className='pointer'>
            <DeleteForeverIcon sx={{ "&:hover": { color: "red" } }}/>       
          </button>
        </div>
    </div>
  )
}
