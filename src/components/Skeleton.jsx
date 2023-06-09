import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const Skeleton = () => {
    return (
        <div className='w-100 bg-gray-700  mt-4 rounded-lg'>
            <div className='h-[172.5px] bg-gray-600 flex items-center justify-center rounded-t-lg'>
                <ClipLoader color={'#fff'} size={50} />
            </div>
            <div className='px-4 py-4 border-b-2 h-[200px]'>
               
            </div>
            <div className='bg-gray-700 h-[60px] rounded-lg'>

            </div>
        </div>
    );
};

export default Skeleton;