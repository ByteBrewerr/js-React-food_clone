import React from 'react'
import {ThreeDots} from 'react-loader-spinner';

export default function Loader({color = 'red', w,h}) {
    return (
      <>
         <ThreeDots color={color} height={h} width={w} />
      </>    
      );
}
