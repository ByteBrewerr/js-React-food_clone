import React from 'react';
import { usePopup } from '../popup/popup';
import OffersPopUp from "./OffersPopUp";

const NewProducts = () => {
    const { popUpVisible, handlePopUp } = usePopup();
    return (
        <div>
            <img onClick={handlePopUp} className='w-[1200px] m-auto rounded-lg mt-7 cursor-pointer' src="/images/offers.jpg" alt="offers"/>
            <OffersPopUp handlePopUp={handlePopUp} popUpState={popUpVisible}/>
        </div>
    );
};

export default NewProducts;

