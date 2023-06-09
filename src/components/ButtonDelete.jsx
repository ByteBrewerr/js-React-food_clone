import React from 'react'
import { IoIosRemove } from 'react-icons/io';
import { decreaseToppingCount } from '../Redux/slices/productPopUpSlice';
import { useDispatch } from 'react-redux';

export default function ButtonDelete({name}) {
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(decreaseToppingCount(name))} className='bg-red-700 px-1 rounded-lg hover:scale-[95%] transition-transform active:scale-[85%]'>
      <IoIosRemove size={25}/>
    </button>
  )
}
