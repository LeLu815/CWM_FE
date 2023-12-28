import classes from "./Detail.module.css";
import Header from "../../components/header/Header";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { AuthContext } from "../../Context/ThemeContext";
import OneLineLayout from "../../components/Content/ContentBox/OneLineLayout";

import { useLocation } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";

const style = {
  marginTop: "2rem",
};

const Detail = () => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState([]);

  const handleCategoryName = (list) => {
    setCategoryName(list);
  };

  return (
    <>
      <Header />
      <div className={classes.detail_container}>
        <CategoryNav handleCategoryName={handleCategoryName} style={style} />
      </div>
    </>
  );
};

export default Detail;
