import React from 'react';
import {FiClock} from "react-icons/fi";
import {FaWallet} from "react-icons/fa";

const Info = () => {
    return (
        <div className='bg-gray-700 w-[1200px] h-[120px] m-auto mt-8 flex justify-between items-center px-[15%] rounded-lg'>
            <div className='flex'>
                <FiClock className='mt-[10px] mr-4 h-8 w-8'/>
                <div className='flex flex-col'>
                    <span>до 60 мин.</span>
                    <span className='text-gray-400'>ВРЕМЯ ПРИГОТОВЛЕНИЯ</span>
                </div>
            </div>
            <div className='flex'>
                <FaWallet className='mt-[10px] mr-4 h-8 w-8'/>
                <div className='flex flex-col'>
                    <span>0 р.</span>
                    <span className='text-gray-400'>МИН. СУМ. САМОВЫВОЗА</span>
                </div>
            </div>
        </div>
    );
};

export default Info;