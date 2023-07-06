import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileSideBar from '../components/profile/ProfileSideBar';

export default function UserPage() {
  return (
    <div className='flex w-[1200px] m-auto justify-between'>
      <ProfileSideBar/>
      <Outlet/>
    </div>
  )
}
