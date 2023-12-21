import { useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  // 클릭바가 활성화 되었을 때와 비활되었을 때 구분해서 구현
  return (
    <>
      {!props.boolean ? (
        <div className={classes.nomal_status} onClick={props.handleOnclick}>
          SEARCH
        </div>
      ) : (
        <div className={classes.input_container}>
          <div className={classes.input_cover}></div>
          <input className={classes.input}></input>
        </div>
      )}
    </>
  );
};

export default SearchBar;
