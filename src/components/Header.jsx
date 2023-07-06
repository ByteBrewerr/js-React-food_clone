import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import { useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    const userName = useSelector(state => state.user.name)

    return (
        <div className='bg-gray-700'>
            <div className='flex justify-between items-center h-16 text-white w-[1200px] m-auto'>
                <div className='flex' onClick={()=>navigate('/main/popular')}>
                    <p>Mr.Burger</p>
                </div>
                <div>
                    {isAuth
                     ?
                     <Link 
                        className='border-0 border-b-2 border-white-500 border-dashed hover:text-red-600 hover:border-red-600' 
                        to='/profile/'>
                        {userName}
                     </Link>
                     :
                     <Link 
                        className='border-0 border-b-2 border-white-500 border-dashed hover:text-red-600 hover:border-red-600' 
                        to='/login'>
                        Войти
                     </Link>
                    }                               
                </div>
            </div>
        </div>                 
    );
};

export default Header;