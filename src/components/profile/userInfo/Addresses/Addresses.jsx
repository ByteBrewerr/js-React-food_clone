import React from 'react'
import { useSelector } from 'react-redux'

export default function Addresses() {
    const addresses = useSelector(state => state.user.addresses)
    return (
        <>
            <h1 className='mr-auto font-bold text-lg mt-7'>Ваши адреса</h1>
            {addresses
            ? 
            <div>

            </div>
            :
            <div className='text-2xl m-auto'>
                <p>У вас 0 адресов!</p>
            </div>
            }        
        </>     
    )
}
