import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

import UserCard from "../../components/Layout/UserCard";
import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";

const SignIn = () => {
  const style = {
    margin: "0.5rem auto 3rem auto",
  };

  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div className={classes.arrow_left}>
          <Arrow_left width="100%" height="100%" />
        </div>
        <div className={classes.step_box}>STEP 1</div>
        <div className={classes.title}>SIGN IN</div>
        <div className={classes.sub_title}>Use Your Email Account</div>
        <form className={classes.form}>
          <label className={classes.label}>Name</label>
          <input className={classes.input} type="text"></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Email
          </label>
          <input className={classes.input} type="email"></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Password
          </label>
          <input className={classes.input} type="password"></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Show Password</span>
          </radio>
          <button className={classes.next_btn}>NEXT</button>
          <Link to="/Login" className={classes.link}>
            Do You Have An Account
          </Link>
        </form>
      </UserCard>
    </div>
  );
};

export default SignIn;
