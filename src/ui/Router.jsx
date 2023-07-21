import React from 'react'
import MainPage from "../pages/MainPage";
import { Route, Routes } from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import OffersPage from "../pages/OffersPage";
import Layout from '../components/Layout';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/RegisterPage';
import OrderPage from '../pages/OrderPage';
import UserPage from '../pages/UserPage';
import UserInfoContainer from '../components/profile/userInfo/UserInfoContainer';


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route
            index
            redirectTo="/main/popular"
            element={<MainPage />}
            />
            <Route
            ind
            path="/main/*"
            element={<MainPage />}
            />
            <Route
            path="/offers"
            element={<OffersPage />}
            />
            <Route
            path="/feedback"
            element={<FeedbackPage />}
            />
        </Route>       
        <Route
            path="/login"
            element={<LoginPage />}
        />
        <Route
            path="/register"
            element={<SignUpPage/>}
        />
        <Route
            path="/order"
            element={<OrderPage/>}
        />
        <Route path="/profile" element={<UserPage/>}>
            <Route
            index
            path="/profile/credential"
            element={<UserInfoContainer />}
            />
        </Route>   
    </Routes>
  )
}
