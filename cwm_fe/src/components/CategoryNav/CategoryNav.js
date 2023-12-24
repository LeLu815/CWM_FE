import classes from "./CategoryNav.module.css";
import Category from "./Category";

import { useState, useEffect } from "react";

const CategoryNav = (props) => {
  const [categoryList, setCategoryList] = useState([]);
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
    <div className={classes.container}>
      <Category title="TOURIST SPOT" categorySetting={handleSettingCategory} />
      <Category
        title="CAFE&RESTUARANT"
        categorySetting={handleSettingCategory}
      />
      <Category title="HOTEL" categorySetting={handleSettingCategory} />
      <Category title="COMMUNITY" categorySetting={handleSettingCategory} />
    </div>
  );
};

export default CategoryNav;
