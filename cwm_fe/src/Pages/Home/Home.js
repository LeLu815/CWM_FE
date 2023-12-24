import { Outlet } from "react-router-dom";
import { useState } from "react";
import classes from "./Home.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Header from "../../components/header/Header";
import SeoulMap from "../../components/SeoulMap/SeoulMap";

const Home = () => {
  const [categoryName, setCategoryName] = useState([]);
  const handleCategoryName = (list) => {
    setCategoryName(list);
  };
  console.log(categoryName);
  return (
    <>
      <Header />
      <div className={classes.home_container}>
        <SeoulMap />
        <CategoryNav handleCategoryName={handleCategoryName} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
