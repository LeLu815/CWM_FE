import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./SearchBar.module.css";

import { AuthContext } from "../../Context/ThemeContext";

const searchText = {
  kor: "검색",
  en: "SEARCH",
  ja: "検索",
  zh: "搜索结果",
  tw: "搜索",
  th: "ค้นหา",
};

const SearchBar = (props) => {
  // 클릭바가 활성화 되었을 때와 비활되었을 때 구분해서 구현
  const [searchTerm, setSearchTerm] = useState("");
  const { currLang } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      if (searchTerm === "") {
        return;
      }
      props.handleOnclick();
      navigate(
        {
          pathname: "/search",
          search: `?q=${searchTerm}`,
        },
        {
          state: { searchTerm },
        }
      );
    }
  };

  return (
    <>
      {!props.boolean ? (
        <div className={classes.nomal_status} onClick={props.handleOnclick}>
          {searchText[currLang]}
        </div>
      ) : (
        <div className={classes.input_container}>
          <div className={classes.input_cover}></div>
          <input
            className={classes.input}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handlePressEnter}
          ></input>
        </div>
      )}
    </>
  );
};

export default SearchBar;
