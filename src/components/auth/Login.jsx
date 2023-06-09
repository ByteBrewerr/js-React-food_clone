import React from 'react'
import { useDispatch } from 'react-redux'
import {db} from '../../firebase'
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {collection, getDocs, query, where} from 'firebase/firestore'
import Form from './Form'
import { setUser } from '../../Redux/slices/userSlice'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLoginIn = (email, password) => {
        const auth = getAuth()
        let userName = ''
        const userCollection = collection(db, 'users')
        const q = query(userCollection, where('email', '==', email ))
        
        signInWithEmailAndPassword(auth, email, password)
        .then(async ({user})=>{
          await getDocs(q).then(res=> {
            userName = res.docs[0].data().userName
          })
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
              userName: userName,
          }))  
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
