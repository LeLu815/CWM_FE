import { useNavigate } from "react-router-dom";

import classes from "./Logo.module.css";
import { ReactComponent as LogoBig } from "../Svg/logo.svg";

const Logo = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/");
  };

  return (
    <div className={classes.logo_big} onClick={onHandleClick}>
      <LogoBig width="100%" height="100%" />
    </div>
  );
};

export default Logo;
