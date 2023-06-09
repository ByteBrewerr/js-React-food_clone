import React from 'react';

const OffersPopUp = ({popUpState, handlePopUp}) => {
    const popupStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        opacity: popUpState ? 1 : 0,
        pointerEvents: popUpState ? 'auto' : 'none',
        transition: 'opacity 0.3s ease-in-out'
    }

    const contentStyle = {
        backgroundColor: '#303532',
        padding: '8px 20px 20px 20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
    }

    return (
        <div style={popupStyle}>
            <div style={contentStyle}>
                <button onClick={handlePopUp} className='bg-gray-900 rounded-md w-[80px] h-[30px] ml-[84%]'>
                    Закрыть
                </button>
                <img className='w-[500px] mt-2 block m-auto' src='/images/offers.jpg' alt='offers'/>
                <div className='text-md mt-3'>
                    <p className=''>Новые бургеры!</p>
                    <p className=''>Встречайте два новых бургера! Рокки и Гриб Грибыч</p>
                </div>
            </div>
        </div>
    );
};

export default OffersPopUp;