import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import UserPopup from './UserPopup'
import Loader from '../../../common/Loader'


export default function PersonalData() {
  const userName = useSelector(state => state.user.name)
  const gender = useSelector(state => state.user.gender)
  const id = useSelector(state => state.user.id)
  console.log('render')
  const user = {userName, gender, id}
  const isLoading = useSelector(state => state.user.isLoading)
  const [isPopupVisible, setIsPopupVisible] = useState(false)


  return (
    <>
      <div>
        <div className='flex justify-start'>   
          <span className='mb-4 text-xl font-bold inline-block'>Личные данные</span>
        </div>
        <div>
          <div className='flex items-center bg-slate-700  p-2 rounded-lg border-slate-800 border-[2px]'>
            <span className='text-xs mb-1 text-gray-300'>ID:</span>
            <span className='flex pb-1 ml-3 '>{isLoading ? <Loader w={25} h={25}/> : id}</span>
          </div>
        </div>   
        <div>
          <div className='flex items-center mt-4 bg-slate-700 p-2 rounded-lg border-slate-800 border-[2px]'>
            <span className='text-xs mb-1 text-gray-300'>Имя:</span>
            <span className='flex pb-1 ml-3'>{isLoading ? <Loader w={25} h={25}/> : userName}</span>
          </div>
        </div>
        <div>
          <div className='flex items-center mt-4 bg-slate-700  p-2 rounded-lg border-slate-800 border-[2px]'>
            <span className='text-xs mb-1 text-gray-300'>Пол:</span>
            <span className='flex pb-1 ml-3'>{isLoading ? <Loader w={25} h={25}/> : gender}</span>
          </div>
        </div> 
        <button className='w-48 h-12 mt-6 bg-red-500 rounded-lg' onClick={()=>setIsPopupVisible(true)}>Редактировать</button>  
      </div>
      <UserPopup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} {...user}/>
    </>
  )
}
