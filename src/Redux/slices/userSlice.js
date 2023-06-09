import {createSlice} from '@reduxjs/toolkit'


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
        setUser(_, action){
            return {
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
                name: action.payload.userName,
            }
        },
        removeUser(){
            return {
                email: null,
                token: null,
                id: null,
                name: null,
            }
        },
    }
    
})

export const {setUser, removeUser, setName } = userSlice.actions

export default userSlice.reducer