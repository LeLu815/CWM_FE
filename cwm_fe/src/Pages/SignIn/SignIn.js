import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { useState, useRef, useContext } from "react";

import UserCard from "../../components/Layout/UserCard";
import { ReactComponent as Arrow_left } from "../../Svg/arrow_left.svg";
import { AuthContext } from "../../Context/ThemeContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowPwChecked, setShowPwChecked] = useState(false);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

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

  const handleSignUp = async () => {
    try {
      try {
        const response = await fetch("https://evan-moon.github.io/feed.xml");
        console.log("response :", response);
      } catch (error) {}
      // // 회원가입 요청을 보내고 응답을 처리합니다.
      // const response = await fetch("http://54.253.238.12:8000/user/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     password: `${password}`,
      //     heart: 0,
      //     imageUrl: "@@@",
      //   }),
      // });

      // if (response.ok) {
      //   navigate("/login");
      // }
    } catch (error) {
      console.error("회원가입 중 에러 발생:", error);
      alert("SignIn Failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

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
        <div className={classes.title}>SIGN IN</div>
        <div className={classes.sub_title}>Use Your Email Account</div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label}>Name</label>
          <input
            className={classes.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="30"
          ></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Email
          </label>
          <input
            className={classes.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="30"
          ></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={passwordRef}
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
          <button className={classes.next_btn} type="submit">
            NEXT
          </button>
          <Link to="/Login" className={classes.link}>
            Do You Have An Account
          </Link>
        </form>
      </UserCard>
    </div>
  );
};

export default SignIn;
