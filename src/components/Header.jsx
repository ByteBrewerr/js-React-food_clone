import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../Redux/slices/userSlice';
import { signOut, getAuth } from 'firebase/auth';

const Header = () => {
    const auth = getAuth()
    const {isAuth} = useAuth()
    const dispatch = useDispatch()
    const userName = useSelector(state => state.user.name)

    const handleSingOut = ()=>{
        signOut(auth)
        dispatch(removeUser())
    }

    return (
        <div className='bg-gray-700'>
            <div className='flex justify-between items-center h-16 text-white w-[1200px] m-auto'>
                <div className='flex'>
                    <p>Mr.Burger</p>
                </div>
                <div>
                    {isAuth
                     ?
                     <Link 
                        className='border-0 border-b-2 border-white-500 border-dashed hover:text-red-600 hover:border-red-600' 
                        to='/main'
                        onClick={()=>handleSingOut()}>
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