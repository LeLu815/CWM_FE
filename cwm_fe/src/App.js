import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import clasese from "./App.module.css";
import Header from "./components/header/Header";
// import { ThemeContext } from "./Context/ThemeContext";
import { AuthProvider } from "./Context/ThemeContext";

import Layout from "./components/Layout/Layout";

import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";
import SignDone from "./Pages/SignIn/SignDone";
// import SignSetProfile from "./Pages/SignIn/SignSetProfile";

function App() {
  return (
    <AuthProvider>
      <div className={clasese.background}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signdone" element={<SignDone />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
