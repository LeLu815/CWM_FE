import classes from "./CategoryNav.module.css";
import Category from "./Category";

import { useState } from "react";

const CategoryNav = (props) => {
  const [categoryName, setCategoryName] = useState(null);
  const handleSettingCategory = (name) => {
    setCategoryName(name);
  };

  return (
    <div className={classes.container}>
      <Category
        title="TOURIST SPOT"
        categorySetting={handleSettingCategory}
        selectedName={categoryName}
      />
      <Category
        title="CAFE&RESTUARANT"
        categorySetting={handleSettingCategory}
        selectedName={categoryName}
      />
      <Category
        title="HOTEL"
        categorySetting={handleSettingCategory}
        selectedName={categoryName}
      />
      <Category
        title="COMMUNITY"
        categorySetting={handleSettingCategory}
        selectedName={categoryName}
      />
    </div>
  );
};

export default CategoryNav;
