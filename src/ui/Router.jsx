import React from 'react'
import Main from "../pages/MainPage";
import { Route, Routes } from "react-router-dom";
import Feedback from "../pages/FeedbackPage";
import Offers from "../pages/OffersPage";
import Layout from '../components/Layout';
import Login from '../pages/auth/LoginPage';
import SignUp from '../pages/auth/RegisterPage';
import OrderPage from '../pages/OrderPage';

export default function Router() {
  return (
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
  )
}
