import { Outlet } from "react-router-dom";
import { useState } from "react";
import classes from "./Home.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Header from "../../components/header/Header";
import SeoulMap from "../../components/SeoulMap/SeoulMap";

const Home = () => {
  const [categoryName, setCategoryName] = useState(null);
  const handleCategoryName = (name) => {
    setCategoryName(name);
  };
  return (
    <>
      <Header />
      <div className={classes.home_container}>
        <CategoryNav handleCategoryName={handleCategoryName} />
        <SeoulMap />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
