import classes from "./WishList.module.css";
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImgaeBox from "../../components/Content/Image/ImgaeBox";

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

const WishList = () => {
  const [dataList, setDataList] = useState(null);
  const navigate = useNavigate();
  const onHandleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (!dataList) {
      setDataList(pathList);
    }
  });
  return (
    <>
      <Header />
      <div className={classes.wish_container}>
        <div className={classes.fixed_box}></div>
        <div className={classes.box_arrangement}>
          <div className={classes.padding_box}></div>
          <div className={classes.content_box}>
            {dataList &&
              dataList.map((data, index) => {
                return (
                  <div
                    className={classes.data_box}
                    key={`index_${index}`}
                    onClick={() => onHandleClick(data.id)}
                  >
                    <div className={classes.img_box}>
                      <ImgaeBox path={data.path} />
                    </div>
                    <div className={classes.info_box}>
                      <div className={classes.title}>{data.title}</div>
                      <div className={classes.desc}>{data.desc}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
