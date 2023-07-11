import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../common/Loader'
import { updateUser } from '../../../Redux/slices/userSlice';

export default function UserPopup({ isVisible, setIsVisible, id,}) {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.user.isLoading)
  const [inputUserName, setInputUserName] = useState('');
  const [inputGender, setInputGender] = useState('');

  const handleInputChange = (e) => {
    if (e.target.name === 'userName') {
      setInputUserName(e.target.value);
    } else if (e.target.name === 'gender') {
      setInputGender(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputUserName.length < 3){
      alert('Имя должно содержать минимум 3 символа')
      return 
    } 

    if (inputGender === '') {
      alert('Выберите пол');
      return;
    }

    dispatch(updateUser({ userName: inputUserName, gender: inputGender }))
    .then(() => {
      setIsVisible(false)
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-gray-900 p-8 rounded-lg relative">
        {isLoading && (
          <Loader />
        )}
        <h2 className="text-white text-xl font-bold mb-4">Личные данные</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="id">
              ID:
            </label>
            <input
              type="text"
              value={id}
              className="border-2 border-gray-400 rounded w-full px-3 py-2"
              disabled
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="userName">
              UserName:
            </label>
            <input
              placeholder='Ваше новое имя'
              type="text"
              name="userName"
              value={inputUserName}
              onChange={handleInputChange}
              className="border-2 border-gray-400 rounded w-full px-3 py-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-1" htmlFor="gender">
              Gender:
            </label>
            <select
              name="gender"
              value={inputGender}
              onChange={handleInputChange}
              className="border-2 border-gray-400 rounded w-full px-3 py-2 text-black"
            >
              <option value="" disabled>Выберите пол</option>
              <option value="Мужской">Мужской</option>
              <option value="Женский">Женский</option>
            </select>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-4"
            onClick={()=>setIsVisible(false)}
          >
            Назад
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}