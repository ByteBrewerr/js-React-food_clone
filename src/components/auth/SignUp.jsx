import React from 'react'
import { useDispatch } from 'react-redux'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import Form from './Form'
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../firebase'
import { setUser } from '../../Redux/slices/userSlice'
import {useNavigate} from "react-router-dom";



export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignUp = (email, password, userName) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            const userCollection = collection(db, 'users')
            const q = query(userCollection, where('email', '==', email ))
            addDoc(userCollection, {userName: userName,email: user.email,id: user.uid})
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                userName: userName
            }))
            getDocs(q).then(res=> {
                const users = res.docs.map(doc =>({
                    data:doc.data(),
                    id: doc.id,
                }))
                console.log(users)
            })

            navigate('/main');
        })
        .catch(console.error)
    }
  return (
    <div>
        <Form handleAuth={handleSignUp} title={'Зарегистрироваться'}/>
    </div>
  )
}
