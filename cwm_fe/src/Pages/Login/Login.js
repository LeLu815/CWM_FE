import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useContext } from "react";
import Logo from "../../components/Logo";

import UserCard from "../../components/Layout/UserCard";
import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";

import { AuthContext } from "../../Context/ThemeContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPwChecked, setShowPwChecked] = useState(false);
  const passwordRef = useRef(null);

  // 비밀번호 보이기 숨기기 함수
  const handleShowPwChecked = () => {
    const password = passwordRef.current;
    if (password === null) return;

    setShowPwChecked(!isShowPwChecked);
    if (!isShowPwChecked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  // 뒤로가기 함수
  const onClickArrow = () => {
    navigate("/");
  };

  // 로그인 기능 함수

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const style = {
    margin: "0.5rem auto 0 auto",
  };

  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div className={classes.arrow_left} onClick={onClickArrow}>
          <Arrow_left width="100%" height="100%" stroke="#ffffff" />
        </div>
        <div className={classes.title}>LOG IN</div>
        <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <div className={classes.move_to_signin}>Create Account</div>
        </Link>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label}>Email</label>
          <input
            className={classes.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxlength="30"
          ></input>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>Save Email Addres</span>
          </radio>
          <label className={classes.label}>Password</label>
          <input
            className={classes.input}
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength="24"
          ></input>
          <radio className={classes.radio}>
            <input
              className={classes.radio_checkbox}
              type="checkbox"
              onChange={handleShowPwChecked}
            />
            <span className={classes.radio_span}>Show Password</span>
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
            <button className={classes.button_next} type="submit">
              NEXT
            </button>
          </div>
        </form>
      </UserCard>
    </div>
  );
};

export default Login;
