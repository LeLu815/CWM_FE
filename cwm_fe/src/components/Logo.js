import { useState } from "react";

import classes from "./Logo.module.css";
import { ReactComponent as LogoBig } from "../Svg/logo.svg";

const Logo = () => {
  return (
    <div className={classes.logo_big}>
      <LogoBig width="100%" height="100%" />
    </div>
  );
};

export default Logo;
