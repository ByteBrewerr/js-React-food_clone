import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form({ handleAuth, title}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('')
  const isLoginPage = title === 'Войти'

  return (
    <div className="max-w-md w-full mx-auto mt-[10%]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <form className="mb-4">
          {isLoginPage 
            ?
            <></>
            :
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="userName"
              type="userName"
              placeholder="Ivan"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          }          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleAuth(email, password, userName)}
            >
              {title}
            </button>
            {isLoginPage ? (
              <span>
                <p className='text-blue-500 text-lg'>Нет учетной записи?</p>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/register">
                  Зарегистрироваться
                </Link>   
              </span>   
              
            ) : (
              <span className="flex justify-center items-center flex-col">
                <p className='text-blue-500 text-lg'>Есть учетная запись?</p>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/login">
                  Войти
                </Link>     
              </span>               
            )}
          </div>
        </form>
        <div className="text-center"> 
          <Link className="block mt-2 text-sm font-bold text-blue-500 hover:text-blue-800" to="/main">
            Назад
          </Link>        
        </div>
      </div>
    </div>
  );
}

export default Form;