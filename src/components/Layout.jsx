import React from 'react';
import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div  className='w-[1200px] m-auto'>
      <MainNavigation />
      <Outlet/>
    </div>
  );
}

export default Layout;