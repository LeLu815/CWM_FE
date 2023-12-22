import classes from "./SignDone.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import UserCard from "../../components/Layout/UserCard";

const SignDone = () => {
  const [username, setUsername] = useState("Nick Name");
  const [imgFile, setImgFile] = useState(null);

  const style = {
    margin: "0.5rem auto 3rem auto",
  };
  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div
          className={classes.user_image}
          style={{ backgroundImage: `url(${imgFile ? imgFile : ""})` }}
        ></div>
        <div className={classes.username}>{username}</div>
        <div className={classes.welldone}>Weldone!</div>
        <Link to="/" className={classes.lets_explore}>
          Let's Explore
        </Link>
      </UserCard>
    </div>
  );
};
export default SignDone;
