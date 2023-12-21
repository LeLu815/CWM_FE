import { useState } from "react";
import classes from "./Header.module.css";
import Logo from "../Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const handleOnclick = () => {
    setIsSearchMode((boolean) => !boolean);
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
        <div className={classes.color}>로그인</div>
      </div>
    </div>
  );
};

export default Header;
