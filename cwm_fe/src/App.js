import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import clasese from "./App.module.css";
import Header from "./components/header/Header";
import { ThemeContext } from "./Context/ThemeContext";
import Layout from "./components/Layout/Layout";

import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Login from "./Pages/Login/Login";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  // 일본, 미국, 타이완(중국번체), 중국(중국간체), 태국+ 한국어
  const [setting, setSetting] = useState([
    // 한국어
    { lang: "kor", checked: true },
    // 일본어
    { lang: "ja", checked: false },
    // 영어
    { lang: "en", checked: false },
    // 태국어
    { lang: "th", checked: false },
    // 중국 간체
    { lang: "zh", checked: false },
    // 타이완
    { lang: "tw", checked: false },
  ]);
  const onChangeSetting = (lang) => {
    setSetting((list) =>
      list.map((nation) => {
        if (nation.lang === lang) {
          return (nation.checked = true);
        } else {
          return nation;
        }
      })
    );
  };
  return (
    <ThemeContext.Provider>
      <div className={clasese.background}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route index element={<Search />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
