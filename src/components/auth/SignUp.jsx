import React from 'react'
import { useDispatch } from 'react-redux'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import Form from './Form'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../firebase'
import { setUser } from '../../Redux/slices/userSlice'
import {useNavigate} from "react-router-dom";


export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSignUp = async (email, password, userName, gender) => {
      try {
          if (password.length < 6) {
            throw new Error('Пароль должен содержать не менее 6 символов');
          }
          if (userName.length < 3 || userName.length > 15) {
            throw new Error('Логин должен содержать от 3 до 15 символов');
          }
          const auth = getAuth();
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
          const userCollection = collection(db, 'users');
          await addDoc(userCollection, {
              userName: userName,
              email: user.email,
              id: user.uid,
              gender: gender,
          });
          dispatch(setUser({ ...user, gender, userName }));
          navigate('/main');
      } catch (error) {
          alert(error);
      }
  }
  return (
    <div>
        <Form handleAuth={handleSignUp} title={'Зарегистрироваться'}/>
    </div>
  )
}
