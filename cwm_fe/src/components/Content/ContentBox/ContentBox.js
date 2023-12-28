import classes from "./ContentBox.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentBox = (props) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  const handleClick = (id) => {
    navigate({
      pathname: `/detail/${id}`,
    });
  };

  return (
    <div
      className={`${classes.box_container}`}
      onClick={() => handleClick(props.id)}
    >
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
