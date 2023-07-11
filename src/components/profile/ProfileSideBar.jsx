import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from '../../Redux/slices/userSlice';

export default function ProfileSideBar() {
  const auth = getAuth();
  const dispatch = useDispatch();
  const [activeId, setActiveId] = useState(0);

  const handleSignOut = async() => {
    await signOut(auth);
    dispatch(removeUser());
  };

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className='bg-gray-600 w-[300px] h-[500px] mt-12 rounded-lg flex flex-col justify-between py-[80px] items-center text-xl font-bold '>
      <Link
        className={`hover:text-red-500 ${activeId === 1 ? 'active' : ''}`}
        to='/profile/credential'
        onClick={() => handleClick(1)}
      >
        <p>Профиль</p>
      </Link>
      <Link
        className={`hover:text-red-500 ${activeId === 2 ? 'active' : ''}`}
        to='/profile/userinfo'
        onClick={() => handleClick(2)}
      >
        <p>История покупок</p>
      </Link>
      <Link
        className={`hover:text-red-500 ${activeId === 3 ? 'active' : ''}`}
        to='/profile/reviews'
        onClick={() => handleClick(3)}
      >
        <p>История отзывов</p>
      </Link>
      <Link
        className='hover:text-red-500'
        onClick={() => {
          handleSignOut();
        }}
        to='/main/popular'
      >
        Выйти
      </Link>
    </div>
  );
}