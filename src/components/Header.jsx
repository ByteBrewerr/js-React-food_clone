import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../common/Loader';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()

    const userName = useSelector(state => state.user.name)
    const isLoading = useSelector(state => state.user.isLoading)
    if (isLoading){
        return (
            <div className='bg-gray-700'>
                <div className='flex justify-between items-center h-16 text-white w-[1200px] m-auto'>
                <div className='flex' >
                    <p>Mr.Burger</p>
                </div>
                <Loader color='red' w={50} h={50}/>  
            </div>    
            </div>
            
        )
    }

    return (
        <div className='bg-gray-700'>
            <div className='flex justify-between items-center h-16 text-white w-[1200px] m-auto'>
                <div className='flex' onClick={()=>navigate('/main/popular')}>
                    <p>Mr.Burger</p>
                </div>
                <div>
                    {userName
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