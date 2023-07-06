import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {collection, getDocs, query, where, updateDoc, doc} from 'firebase/firestore'
import {db} from '../../firebase'

export const setUser = createAsyncThunk('setUser', async (user) => {
    if ('userName' in user){ //register
        return {
            email: user.email,
            token: user.token,
            id: user.uid,
            name: user.userName,
            gender: user.gender,
        }
    }
    else{ //login
        const userCollection = collection(db, 'users')
        const q = query(userCollection, where('email', '==', user.email ))
        const response = await getDocs(q)
        const userName = response.docs[0].data().userName
        const gender = response.docs[0].data().gender

        const newUser = {...user, userName, gender}
        localStorage.setItem('user', JSON.stringify(newUser))
        return {
            ...newUser
        }
    }
 
  });
  export const updateUser = createAsyncThunk('updateUser', async (userCredential, thunkAPI) => {
    const { user } = thunkAPI.getState();
    await updateDoc(doc(db,'users', '2r3z6gC2tX05qYvkoUcg'),{
        userName: 'sinSobaki'
    })

    return {
        ...user,
        ...userCredential
    };
   
});

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    gender: null,
    isLoading: false
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
                gender: null
            }
        },
    },      
    extraReducers: (builder) => {
        builder
        .addCase(setUser.pending, (state, action) => {
        })
        .addCase(setUser.fulfilled, (state, action) => {
            return {...state, isLoading:false, ...action.payload } 
        })
        .addCase(updateUser.pending, (state) => {
            return {...state, isLoading: true}
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            console.log('done')
           return {...state, isLoading: false, ...action.payload}
        })
    },
    
})

export const {removeUser, setName, setNewGender, setNewName} = userSlice.actions

export default userSlice.reducer