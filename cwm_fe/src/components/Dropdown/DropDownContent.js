import classes from "./DropDownContent.module.css";
import { useState, useEffect } from "react";

const DropDownContent = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handelClick = () => {
    setIsClicked((boolean) => {
      props.handleIsClicked({ data: props.data, boolean: !boolean });
      props.handleDropdwonClick();
      return !boolean;
    });
  };
  useEffect(() => {
    const isExist = props.selectedValue.includes(props.data);
    if (!isExist) {
      setIsClicked(false);
    }
  });

  return (
    <div className={classes.dropdown_content_div} onClick={handelClick}>
      <input
        className={classes.radio_checkbox}
        type="radio"
        checked={isClicked}
      />
      <label className={classes.dropdown_content_div_text}>{props.value}</label>
    </div>
  );
};

export default DropDownContent;
