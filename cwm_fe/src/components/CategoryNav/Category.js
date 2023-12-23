import classes from "./Category.module.css";

import { useState, useEffect } from "react";

const Category = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClikc = () => {
    if (isClicked) {
      props.categorySetting(null);
    } else {
      props.categorySetting(props.title);
    }
    setIsClicked((boolean) => !boolean);
  };
  useEffect(() => {
    props.title === props.selectedName
      ? setIsClicked(true)
      : setIsClicked(false);
  });
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
