import React, { createContext, useEffect, useState } from "react";

// 전역 컨텍스트 생성
export const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
  // 사용자 정보와 로그인 상태를 저장할 상태(state) 정의
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 일본, 미국, 타이완(중국번체), 중국(중국간체), 태국+ 한국어
  // 로컬 스토리지에 넣어서 저장할 수 있게 할 것.
  const [currLang, setCurrLang] = useState("en");
  // const [setting, setSetting] = useState([
  //   // 한국어
  //   { lang: "kor", checked: true },
  //   // 일본어
  //   { lang: "ja", checked: false },
  //   // 영어
  //   { lang: "en", checked: false },
  //   // 태국어
  //   { lang: "th", checked: false },
  //   // 중국 간체
  //   { lang: "zh", checked: false },
  //   // 타이완
  //   { lang: "tw", checked: false },
  // ]);
  // const onChangeSetting = (lang) => {
  //   setSetting((list) =>
  //     list.map((nation) => {
  //       if (nation.lang === lang) {
  //         setCurrLang(lang);
  //         return (nation.checked = true);
  //       } else {
  //         return nation;
  //       }
  //     })
  //   );
  // };

  // 토큰을 받아와서 로그인 상태를 업데이트하는 함수
  const login = (token) => {
    // 토큰을 해석하여 사용자 정보를 얻어온다고 가정
    // const user = decodeToken(token);
    // setUser(user);
    // setIsLoggedIn(true);
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    console.log(currLang);
  });

  // AuthContext.Provider로 감싸줍니다. 컨텍스트 값으로 state와 login, logout 함수를 제공합니다.
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        currLang,
        login,
        logout,
        setCurrLang,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
