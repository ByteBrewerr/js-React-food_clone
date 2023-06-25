import './App.css';
import {useEffect} from 'react'
import ScrollButton from "./components/ScrollButton";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Router from './ui/Router';
import useAuth from './hooks/use-auth';
import { removeUser, setUser } from './Redux/slices/userSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  const {isAuth} = useAuth()
  const auth = getAuth()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
    if (user){
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))))
    }
    else{
      localStorage.removeItem('user')
      dispatch(removeUser())
    }
  })
  return ()=>{
    unsubscribe()
  }
  },[])  

  return (
    <div>
      <ToastContainer
        autoClose={3000}
        draggable = {false}
        pauseOnHover = {false}
      />
        <Header/>      
        <Router/>
        <ScrollButton/>
    </div>
  );
  }

export default App;
