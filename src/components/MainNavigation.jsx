import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';
import CartPopUp from './CartPopUp';

const MainNavigation = () => {
    const [activeLink, setActiveLink] = useState('/');
    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <div className='flex justify-between items-center mt-5'>
            <nav>
                <ul className='flex space-x-7'>
                    <li>
                        <NavLink
                            id={'li'}
                            to='/'
                            className={`text-white ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/')}
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            id={'li'}
                            to='/offers'
                            className={`text-white ${activeLink === '/offers' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/offers')}
                        >
                            Акции
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            id={'li'}
                            to='/feedback'
                            className={`text-white ${activeLink === '/feedback' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('/feedback')}
                        >
                            Отзывы
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <CartButton/>
            <CartPopUp/>
        </div>     
    );
};

export default MainNavigation;

