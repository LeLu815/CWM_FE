import classes from "./SignSetProfile.module.css";

import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

import UserCard from "../../components/Layout/UserCard";

const SignSetProfile = () => {
  <div className={classes.background}>
    <div className={classes.logo_container}>
      <Logo />
    </div>
    <UserCard style={style}>
      <div className={classes.step_box}>STEP 2</div>
      <div className={classes.title}>PROFILE</div>
    </UserCard>
  </div>;
};

export default SignSetProfile;
