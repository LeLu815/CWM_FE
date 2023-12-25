import classes from "./ContentBox.module.css";
import React, { useState } from "react";

const ContentBox = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div className={`${classes.box_container}`}>
      {isLoaded ? (
        <>
          <div className={classes.box_size}>
            <img src={props.path} alt="이미지" />
          </div>
          <div className={classes.text_box_size}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.desc}>{props.desc}</div>
          </div>
        </>
      ) : (
        <>
          <div className={`${classes.is_loading} ${classes.box_size}`}></div>
          <div className={classes.text_box_size}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.desc}>{props.desc}</div>
          </div>
        </>
      )}
      {/* <img
        src={props.path}
        alt="이미지"
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      ></img> */}
    </div>
  );
};

export default ContentBox;
