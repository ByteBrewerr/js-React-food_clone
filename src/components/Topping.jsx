import React from 'react'
import ButtonAdd from './ButtonAdd'
import ButtonDelete from './ButtonDelete'

export default function Topping({name, price, count }) {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex flex-col text-sm'>
                    <span >{name}</span>
                    <span className='text-red-500 font-bold'>{price} р.</span>
                </div>
                <div className='flex space-x-3 items-center'>
                    <ButtonDelete name={name}/>
                    <span className='font-bold'>{count}</span>
                    <ButtonAdd name={name}/>
                </div>
            </div>
        </div>
    )
}
