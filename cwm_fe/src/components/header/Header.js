import { Outlet, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import classes from "./Header.module.css";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import { AuthContext } from "../../Context/ThemeContext";
import Drowdown from "../Dropdown/Drowdown";

const countryName = {
  kor: ["한국어", "영어", "일본어", "중국어", "대만어", "태국어"],
  ja: [
    "かんこくご",
    "えいご",
    "にほんご",
    "ちゅうごくご",
    "たいわん",
    "タイご",
  ],
  en: ["Korean", "English", "Japanese", "Chinese", "Taiwanese", "Thai"],
  th: [
    "ภาษาเกาหลี",
    "ภาษาอังกฤษ",
    "ภาษาญี่ปุ่น",
    "ภาษาจีน",
    "ภาษาไต้หวัน",
    "ภาษาไทย",
  ],
  zh: ["韩国语", "英语", "日本語", "中國語", "母汤", "泰语"],
  tw: ["韓國語", "英語", "日語", "漢語", "臺灣語", "泰語"],
};

const Header = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn, currLang, logout, setCurrLang } =
    useContext(AuthContext);

  const [isSearchMode, setIsSearchMode] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const handleOnclick = () => {
    setIsSearchMode((boolean) => !boolean);
  };
  const onHandleLanguage = (index) => {
    const langList = ["kor", "en", "ja", "zh", "tw", "th"];
    setCurrLang(langList[index]);
  };

  return (
    <div className={classes.header}>
      {isSearchMode && (
        <>
          <div className={classes.header_background}></div>
          <div className={classes.header_full} onClick={handleOnclick}>
            <span className={classes.up_background}>EXPLORE SEOUL</span>
            <span className={classes.down_background}>WITHOUT WORRIES!</span>
          </div>
        </>
      )}
      <div className={classes.header_nomal}>
        <Logo />
        <SearchBar handleOnclick={handleOnclick} boolean={isSearchMode} />
        {isLoggedIn ? (
          <div className={classes.header_info_login}>
            <div
              className={`${`${classes.color} ${classes.header_info_element}`} ${
                classes.header_info_element
              }`}
              onClick={() => navigate("/signin")}
            >
              WISHLIST
            </div>
            <div
              className={`${classes.color} ${classes.header_info_element}`}
              onClick={() => logout()}
            >
              LOGOUT
            </div>
            <div className={`${classes.color} ${classes.header_info_element}`}>
              🌐
            </div>
          </div>
        ) : (
          <div className={classes.header_info}>
            <div
              className={`${`${classes.color} ${classes.header_info_element}`} ${
                classes.header_info_element
              }`}
              onClick={() => navigate("/signin")}
            >
              JOIN
            </div>
            <div
              className={`${classes.color} ${classes.header_info_element}`}
              onClick={() => navigate("/login")}
            >
              LOGIN
            </div>
            <div
              className={`${classes.color} ${classes.header_info_element} ${classes.header_info_element_naiton}`}
              onClick={() => setVisibility((boolean) => !boolean)}
            >
              🌐
              <Drowdown
                naitonList={countryName[currLang]}
                visibility={visibility}
                handleSelect={onHandleLanguage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
