import React from 'react';

export const usePopup = () => {
    const [popUpVisible, setPopVisible] = React.useState(false);

    const handlePopUp = () => {
        setPopVisible(prev => !prev);
    };

    return {
        popUpVisible,
        handlePopUp,
    };
};