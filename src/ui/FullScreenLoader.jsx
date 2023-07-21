import React from 'react';
import Loader from '../common/Loader'
import { useSelector } from 'react-redux';

export default function FullScreenLoader() {
  const isLoadingUser = useSelector((state) => state.user.isLoading);
  const isLoadingProduct = useSelector((state) => state.product.isLoading);

  const isLoading = isLoadingUser || isLoadingProduct;
  console.log('a')
  if (!isLoading) {
    return null;
  }
  
  return (
    <div className='bg-white flex justify-center items-center h-screen'>
      <Loader color='red' w={200} h={200}/>
    </div>
  );
}