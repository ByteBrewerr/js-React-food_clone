import React from 'react'
import { ClipLoader } from 'react-spinners';

export default function Loader() {
    return (
      <div className="flex justify-center items-center absolute inset-0">
          <div className="flex justify-center items-center h-screen">
          <ClipLoader color={'#fff'} size={200} />
        </div>
      </div>    
      );
}
