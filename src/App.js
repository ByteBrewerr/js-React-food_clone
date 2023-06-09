import './App.css';
import React from 'react'
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feedback from "./pages/Feedback";
import Offers from "./pages/Offers";
import ScrollButton from "./components/ScrollButton";
import MainNavigation from "./components/MainNavigation";
import Layout from './components/Layout';
import Login from './pages/Login';
import SignUp from './pages/Register';


function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route
            path="/"
            redirectTo="/main/popular"
            element={<Layout><Main /></Layout>}
          />
          <Route
            path="/main/*"
            element={<Layout><Main /></Layout>}
          />
          <Route
            path="/offers"
            element={<Layout><Offers /></Layout>}
          />
          <Route
            path="/feedback"
            element={<Layout><Feedback /></Layout>}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<SignUp/>}
          />
        </Routes>
        <ScrollButton></ScrollButton>
      </BrowserRouter>
    );
  }

export default App;
