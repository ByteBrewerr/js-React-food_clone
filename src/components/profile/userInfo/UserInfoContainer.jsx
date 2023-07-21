import React from 'react'
import PersonalData from './PersonalData'
import Addresses from './Addresses/Addresses'

export default function UserInfoContainer() {
  
  return (
    <div className=' bg-gray-600 w-[80vh] mt-12 rounded-lg text-white text-center p-6 flex flex-col'>
     <PersonalData/>
     <Addresses/>
    </div>
  )
}
