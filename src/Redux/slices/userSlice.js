import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../firebase'

export const setUser = createAsyncThunk('setUser', async (user) => {
    if ('userName' in user){
        return {
            email: user.email,
            token: user.token,
            id: user.id,
            name: user.userName,
        }
    }
    else{
        let userName
        const userCollection = collection(db, 'users')
        const q = query(userCollection, where('email', '==', user.email ))
        const response = await getDocs(q)
        userName = response.docs[0].data().userName
        const newUser = {...user, userName}
        localStorage.setItem('user', JSON.stringify(newUser))
        return {
            email: user.email,
            token: user.token,
            id: user.id,
            name: userName,
        }
    }
 
  });

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    removeUser(){
            return {
                email: null,
                token: null,
                id: null,
                name: null,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setUser.fulfilled, (state, action) => {
            return {...state, email: action.payload.email, token: action.payload.token, id: action.payload.id, name: action.payload.name } 
        })
    },
    
})

export const {removeUser, setName } = userSlice.actions

export default userSlice.reducer