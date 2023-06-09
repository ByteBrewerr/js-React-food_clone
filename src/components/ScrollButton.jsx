import React, { useState, useEffect } from "react";
import { TbArrowBigUpFilled } from 'react-icons/tb';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", toggleVisibility);
        return () => {
            document.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div
                className={`w-[76px] h-[76px] fixed bottom-4 right-[110px] bg-red-600 cursor-pointer p-2 rounded-full text-white ${
                    visible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000 flex items-center justify-center`}
                onClick={scrollToTop}
            >
                <TbArrowBigUpFilled className='h-[50px] w-[50px]'></TbArrowBigUpFilled>
            </div>
        </>
    );
}

export default ScrollButton;
