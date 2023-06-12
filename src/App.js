import './App.css';
import React from 'react'
import Main from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feedback from "./pages/FeedbackPage";
import Offers from "./pages/OffersPage";
import ScrollButton from "./components/ScrollButton";
import Layout from './components/Layout';
import Login from './pages/LoginPage';
import SignUp from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderPage from './pages/OrderPage';



function App() {
    return (
      <div>
        <ToastContainer
          autoClose={3000}
          draggable = {false}
          pauseOnHover = {false}
        />
          <Header/>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route
                index
                redirectTo="/main/popular"
                element={<Main />}
              />
              <Route
              ind
                path="/main/*"
                element={<Main />}
              />
              <Route
                path="/offers"
                element={<Offers />}
              />
              <Route
                path="/feedback"
                element={<Feedback />}
              />
            </Route>       
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<SignUp/>}
            />
            <Route
              path="/order"
              element={<OrderPage/>}
            />
          </Routes>
          <ScrollButton></ScrollButton>
      </div>
    );
  }

export default App;
