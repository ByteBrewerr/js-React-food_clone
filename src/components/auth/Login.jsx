import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword,} from 'firebase/auth'
import Form from './Form'
import { setUser } from '../../Redux/slices/userSlice'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth()

    const handleLoginIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{ 
          dispatch(setUser(user))
          navigate('/main');
        })
      .catch(()=>alert('Invalid user'))
    }

    


  return (
    <div>
        <Form handleAuth={handleLoginIn} title={'Войти'}/>
    </div>
  )
}
