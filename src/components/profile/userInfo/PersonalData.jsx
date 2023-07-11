import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import UserPopup from './UserPopup'
import Loader from '../../../common/Loader'


export default function PersonalData() {
  const userName = useSelector(state => state.user.name)
  const gender = useSelector(state => state.user.gender)//hook12
  const id = useSelector(state => state.user.id)
  const user = {userName, gender, id}
  const [isVisible, setIsVisible] = useState(false)


  return (
    <>
      <div>
        <div className='flex justify-start'>   
          <span className='mb-4 text-xl font-bold inline-block'>Личные данные</span>
        </div>
        <div>
          <span className='text-xs mb-1 text-gray-300'>ID:</span>
          <span className='border-b-2 pb-1 ml-3 '>{id}</span>
        </div>
        <div className='mt-4'>
          <span className='text-xs mb-1 text-gray-300'>Имя:</span>
          <span className='border-b-2 pb-1 ml-3'>{userName}</span>
        </div>
        <div className='mt-4'>
          <span className='text-xs mb-1 text-gray-300'>Пол:</span>
          <span className='border-b-2 pb-1 ml-3'>{gender}</span>
        </div>
        <button className='w-48 h-12 mt-6 bg-red-500 rounded-lg' onClick={()=>setIsVisible(true)}>Редактировать</button>
      
      </div>
      <UserPopup isVisible={isVisible} setIsVisible={setIsVisible} {...user}/>
    </>
  )
}
