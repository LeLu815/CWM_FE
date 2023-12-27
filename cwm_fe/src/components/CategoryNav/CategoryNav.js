import classes from "./CategoryNav.module.css";
import Category from "./Category";
import { AuthContext } from "../../Context/ThemeContext";
import { useState, useEffect, useContext } from "react";

const titleList = [
  {
    kor: "여행지",
    en: "TOURIST SPOT",
    ja: "観光地",
    zh: "旅游区",
    tw: "旅遊景點",
    th: "สถานที่ท่องเที่ยว",
  },
  {
    kor: "카페&레스토랑",
    en: "CAFE&RESTUARANT",
    ja: "カフェ&レストラン",
    zh: "咖啡厅&餐厅",
    tw: "咖啡廳&餐廳",
    th: "คาเฟ่&ร้านอาหาร",
  },
  {
    kor: "숙박",
    en: "HOTEL",
    ja: "泊まり",
    zh: "住宿",
    tw: "住宿",
    th: "การเข้าพักแรม",
  },
  {
    kor: "커뮤니티",
    en: "COMMUNITY",
    ja: "コミュニティー",
    zh: "公社",
    tw: "社區",
    th: "ชุมชน",
  },
];

const CategoryNav = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const { currLang } = useContext(AuthContext);
  const handleSettingCategory = ({ name, action }) => {
    switch (action) {
      case "add":
        setCategoryList((list) => {
          const newList = [...list];
          newList.push(name);
          return newList;
        });
        break;
      case "remove":
        setCategoryList((list) => {
          return [...list].filter((item) => name !== item);
        });
        break;
    }
  };
  useEffect(() => {
    props.handleCategoryName(categoryList);
  });

  return (
    <div className={classes.container} style={props.style}>
      <Category
        title={titleList[0][currLang]}
        categorySetting={handleSettingCategory}
      />
      <Category
        title={titleList[1][currLang]}
        categorySetting={handleSettingCategory}
      />
      <Category
        title={titleList[2][currLang]}
        categorySetting={handleSettingCategory}
      />
      <Category
        title={titleList[3][currLang]}
        categorySetting={handleSettingCategory}
      />
    </div>
  );
};

export default CategoryNav;
