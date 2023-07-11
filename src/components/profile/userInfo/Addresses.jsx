import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUser, updateUser } from '../../../Redux/slices/userSlice';

const Addresses = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [entrance, setEntrance] = useState('');
  const [doorCode, setDoorCode] = useState('');
  const [floor, setFloor] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser())
  };

  return (
    <>
      <div className='flex justify-star mt-4 '>   
          <span className='mb-4 text-xl font-bold inline-block'>Ваши адресы</span>
      </div>
      <h1 className="text-xl font-bold mb-4">Создать адрес</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-red-500">
            Название адреса *
          </label>
          <input
            type="text"
            id="name"
            className="px-2 py-1 border rounded w-full text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="house" className="block text-sm font-medium mb-1 text-red-500">
            Дом *
          </label>
          <input
            type="text"
            id="house"
            className="px-2 py-1 border rounded w-full text-black"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block text-sm font-medium mb-1 text-red-500">
            Улица *
          </label>
          <input
            type="text"
            id="street"
            className="px-2 py-1 border rounded w-full text-black"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="entrance" className="block text-sm font-medium mb-1">
            Подъезд
          </label>
          <input
            type="number"
            id="entrance"
            className="px-2 py-1 border rounded w-full text-black"
            value={entrance}
            onChange={(e) => setEntrance(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doorCode" className="block text-sm font-medium mb-1">
            Код двери
          </label>
          <input
            type="number"
            id="doorCode"
            className="px-2 py-1 border rounded w-full text-black"
            value={doorCode}
            onChange={(e) => setDoorCode(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="floor" className="block text-sm font-medium mb-1">
            Этаж
          </label>
          <input
            type="number"
            id="floor"
            className="px-2 py-1 border rounded w-full text-black"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded "
        >
          Добавить
        </button>
      </form>
    </>
  );
};

export default Addresses;