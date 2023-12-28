import classes from "./Detail.module.css";
import Header from "../../components/header/Header";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { AuthContext } from "../../Context/ThemeContext";
import OneLineLayout from "../../components/Content/ContentBox/OneLineLayout";

import { useState, useEffect } from "react";

import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";

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

const style = {
  marginTop: "10rem",
};

const Detail = () => {
  const [detailData, setDetailData] = useState(null);
  const [dataRecomandList, setdDtaRecomandList] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const queryString = window.location.pathname;
    const id = queryString.split("/").pop();
    // 여기서 데이터들을 비동기젹으로 불러와야 한다.
    // id 데이터와 추천 데이터 4개 가져오기
    setDetailData();
  });

  return (
    <>
      <Header />
      <div className={classes.detail_container} style={style}>
        <div className={classes.main_box}>
          {detailData ? (
            <>
              {isLoaded ? <></> : <></>}
              <img
                src={detailData.path}
                alt="이미지"
                onLoad={handleImageLoad}
                style={{ display: "none" }}
              ></img>
            </>
          ) : (
            <>
              <div className={classes.fake_img_box}></div>
              <div className={classes.info_container}>
                <div className={classes.title}>TITLE</div>
                <div className={classes.desc}>description</div>
                <div className={classes.add_wish}>+ add wishlist</div>
                <div className={classes.info_box}>
                  <div>Location: ----</div>
                  <div>OPEN: ----</div>
                  <div>restroom: ----</div>
                  <div>PARK: ----</div>
                  <div>ALLOW PETS: ----</div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={classes.margin_top}>
          {dataRecomandList ? (
            <OneLineLayout dataList={dataRecomandList} />
          ) : (
            <OneLineLayout dataList={pathList.slice(0, 4)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
