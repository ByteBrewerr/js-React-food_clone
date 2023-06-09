import React from 'react'
import { IoIosAdd } from 'react-icons/io';
import { increaseToppingCount } from '../Redux/slices/productPopUpSlice';
import { useDispatch } from 'react-redux';

export default function ButtonAdd({name}) {
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(increaseToppingCount(name))} className='bg-red-700 px-1 rounded-lg hover:scale-[95%] transition-transform active:scale-[85%]'>
      <IoIosAdd size={25}/>
    </button>
  )
}
