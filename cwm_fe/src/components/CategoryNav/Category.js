import classes from "./Category.module.css";

import { useState, useEffect } from "react";

const Category = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClikc = () => {
    if (isClicked) {
      props.categorySetting({ name: props.title, action: "remove" });
    } else {
      props.categorySetting({ name: props.title, action: "add" });
    }
    setIsClicked((boolean) => !boolean);
  };
  return (
    <div
      className={`${classes.category} ${
        isClicked ? classes.checked : classes.ordinary
      }`}
      onClick={handleOnClikc}
    >
      {props.title}
    </div>
  );
};

export default Category;
