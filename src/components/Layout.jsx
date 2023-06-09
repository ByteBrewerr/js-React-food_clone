import React from 'react';
import MainNavigation from './MainNavigation';

function Layout({ children }) {
  return (
    <div  className='w-[1200px] m-auto'>
      <MainNavigation />
      {children}
    </div>
  );
}

export default Layout;