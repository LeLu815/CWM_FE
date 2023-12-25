import { Outlet } from "react-router-dom";
import { useState } from "react";
import classes from "./Home.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Header from "../../components/header/Header";
import SeoulMap from "../../components/SeoulMap/SeoulMap";
import ContentLayout from "../../components/Content/ContentBox/ContentLayout";
import OneLineLayout from "../../components/Content/ContentBox/OneLineLayout";

const pathList = [
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding. And My Hobby is listening CCM music and just sleeping! And my Favorit Food is pizza and my best fried's name is Lee Wan",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
];

const Home = () => {
  const style = {
    marginTop: "2rem",
  };
  const [categoryName, setCategoryName] = useState([]);
  const handleCategoryName = (list) => {
    setCategoryName(list);
  };
  return (
    <>
      <Header />
      <div className={classes.home_container}>
        <SeoulMap />
        <div className={classes.where_do_you_want_to_go}>
          WHere do you want to go?
        </div>
        <CategoryNav handleCategoryName={handleCategoryName} style={style} />
        <ContentLayout dataList={pathList} />
        <OneLineLayout dataList={pathList.slice(0, 4)} />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
