import React from 'react';
import { usePopup } from '../popup/popup';
import OffersPopUp from "../components/OffersPopUp";

const Offers = () => {
    const { popUpVisible, handlePopUp } = usePopup();
    console.log(usePopup())
    return (
        <div className='w-[1200px] mx-auto mt-8'>
            <div className='bg-gray-700 w-[400px] rounded-lg px-4 py-3'>
                <img onClick={handlePopUp} className='w-[400px] mt-2 block cursor-pointer' src='/images/offers.jpg' alt='offers'/>
                <div className='text-md mt-3'>
                    <p className='font-bold text-xl'>Новые бургеры!</p>
                    <p className='text-sm'>Встречайте два новых бургера! Рокки и Гриб Грибыч</p>
                </div>
            </div>
            <OffersPopUp handlePopUp={handlePopUp} popUpState={popUpVisible}/>
        </div>

    );
};

export default Offers;
