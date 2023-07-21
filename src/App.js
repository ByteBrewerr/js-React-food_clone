import './App.css';
import ScrollButton from "./components/ScrollButton";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Router from './ui/Router';
import useAuthListener from './hooks/use-authListener';



function App() {
  useAuthListener() 
  return (
    <>
      <ToastContainer
        autoClose={3000}
        draggable = {false}
        pauseOnHover = {false}
      />
        <Header/>    
        <Router/>
        <ScrollButton/>
    </>
  );
  }

export default App;
