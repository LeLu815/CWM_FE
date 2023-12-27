import classes from "./Search.module.css";
import Header from "../../components/header/Header";
import CategoryNav from "../../components/CategoryNav/CategoryNav";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const style = {
  marginTop: "2rem",
};

const Search = (props) => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState([]);

  const searchTerm = location.state.searchTerm;
  const handleCategoryName = (list) => {
    setCategoryName(list);
  };

  return (
    <>
      <Header />
      <div className={classes.search_container}>
        <CategoryNav handleCategoryName={handleCategoryName} style={style} />
        <div className={classes.search_keyword_box}>{searchTerm}</div>
      </div>
    </>
  );
};
export default Search;
