import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

import UserCard from "../../components/Layout/UserCard";
import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";

const Login = () => {
  const style = {
    margin: "1rem auto 0 auto",
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
        <div className={classes.title}>LOG IN</div>
        <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <div className={classes.move_to_signin}>Create Account</div>
        </Link>
        <form className={classes.form}>
          <label className={classes.label}>Email</label>
          <input className={classes.input} type="email"></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Save Email Addres</span>
          </radio>
          <label className={classes.label}>Password</label>
          <input className={classes.input} type="password"></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Save Password</span>
          </radio>
          <div className={classes.footer}>
            <div className={classes.social_outer}>
              <div className={classes.social_info}>Log In With</div>
              <div className={classes.social_box}>
                <div
                  className={`${classes.social_button} ${classes.google}`}
                ></div>
                <div
                  className={`${classes.social_button} ${classes.naver}`}
                ></div>
                <div
                  className={`${classes.social_button} ${classes.kakao}`}
                ></div>
              </div>
            </div>
            <button className={classes.button_next}>NEXT</button>
          </div>
        </form>
      </UserCard>
    </div>
  );
};

export default Login;
