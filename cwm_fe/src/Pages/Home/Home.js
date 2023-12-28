import { useState, useContext, useEffect } from "react";
import classes from "./Home.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Header from "../../components/header/Header";
import SeoulMap from "../../components/SeoulMap/SeoulMap";
import ContentLayout from "../../components/Content/ContentBox/ContentLayout";
import OneLineLayout from "../../components/Content/ContentBox/OneLineLayout";
import { AuthContext } from "../../Context/ThemeContext";

const pathList = [
  {
    path: "패스패스",
    title: "This is Title",
    id: "1",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "2",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "3",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "4",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "5",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "6",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "7",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "8",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "9",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "10",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding. And My Hobby is listening CCM music and just sleeping! And my Favorit Food is pizza and my best fried's name is Lee Wan",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "11",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    id: "12",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
];
const langList = ["kor", "en", "ja", "zh", "tw", "th"];
const homeText = {
  kor: "당신은 어디에 가고 싶으시나요?",
  en: "WHere do you want to go?",
  ja: "どこに行きたいですか？",
  zh: "你想去哪里？",
  tw: "你想去哪里？",
  th: "เธออยากจะไปที่ไหน?",
};

const Home = () => {
  const style = {
    marginTop: "2rem",
  };
  const [categoryName, setCategoryName] = useState([]);
  const handleCategoryName = (list) => {
    setCategoryName(list);
  };
  const { user, isLoggedIn, currLang, logout, setCurrLang } =
    useContext(AuthContext);

  return (
    <>
      <Header />
      <div className={classes.home_container}>
        <SeoulMap />
        <div className={classes.where_do_you_want_to_go}>
          {homeText[currLang]}
        </div>
        <CategoryNav handleCategoryName={handleCategoryName} style={style} />
        <ContentLayout dataList={pathList} />
        <OneLineLayout dataList={pathList.slice(0, 4)} />
      </div>
    </>
  );
};

export default Home;
