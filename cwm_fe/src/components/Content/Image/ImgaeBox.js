import classes from "./ImgaeBox.module.css";
import { useState } from "react";

const ImgaeBox = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <img
        src={props.path}
        style={{ display: "none" }}
        // onLoad={() => setIsLoaded(true)}
      />
      {isLoaded ? (
        <img src={props.path} className={classes.img} />
      ) : (
        <div className={classes.fake_div}></div>
      )}
    </>
  );
};

export default ImgaeBox;
