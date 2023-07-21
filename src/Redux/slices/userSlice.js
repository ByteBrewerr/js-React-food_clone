import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

export const setUser = createAsyncThunk("setUser", async (user) => { 
    const userCollection = collection(db, "users");
    const q = query(userCollection, where("email", "==", user.email));
    const response = await getDocs(q);
    const {userName, gender, addresses} = response.docs[0].data();
    const newUser = {
        email: user.email,
        id: user.uid,
        name: userName,
        gender,
        addresses,
    };
    return {
        ...newUser,
    };
});
export const updateUser = createAsyncThunk("updateUser", async ({ userName, gender }, thunkAPI) => {
    const { user } = thunkAPI.getState();
    const userCollection = collection(db, "users");
    const q = query(userCollection, where("email", "==", user.email));
    const response = await getDocs(q);
    await updateDoc(doc(db, "users", response.docs[0].id), {
      userName,
      gender,
    });
    return {
      ...user,
      userName,
      gender,
    };
  }
);
export const addAddress = createAsyncThunk("updateUser", async ({ userName, gender }, thunkAPI) => {
 
})

export const deleteAddress = createAsyncThunk("updateUser", async ({ userName, gender }, thunkAPI) => {
 
});

const initialState = {
  email: null,
  id: null,
  name: null,
  gender: null,
  addresses: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser(state) {
      return {
        ...state,
        email: null,
        id: null,
        name: null,
        gender: null,
        addresses: [],
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.pending, (state, action) => {
        return {...state, isLoading: true}
      })
      .addCase(setUser.fulfilled, (state, action) => {
        return { ...state, isLoading: false, ...action.payload };
      })
      .addCase(setUser.rejected, (state, action) => {
        alert('Ошибка, попробуй заного')
      })
      .addCase(updateUser.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        toast('Данные обновлены')
        return {
          ...state,
          isLoading: false,
          name: action.payload.userName,
          gender: action.payload.gender,
        };
      })
      .addCase(updateUser.rejected, (state) => {
        alert('Ошибка при обновлении данных')
      })
  },
});

export const { removeUser, setName } = userSlice.actions;

export default userSlice.reducer;
