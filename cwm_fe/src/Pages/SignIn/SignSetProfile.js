import classes from "./SignSetProfile.module.css";

import { Link } from "react-router-dom";
import { React, useState, useRef, useCallback } from "react";

import Logo from "../../components/Logo";
import UserCard from "../../components/Layout/UserCard";
import Drowdown from "../../components/Dropdown/Drowdown";
import { ReactComponent as Arrow_down } from "../../Svg/arrow_down.svg";

const nationList = ["한국어", "영어", "일본어", "중국어", "대만어", "태국어"];

const SignSetProfile = () => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [nationLang, setNationLang] = useState("한국어");
  const [imgFile, setImgFile] = useState("");
  const imageInputRef = useRef();
  const style = {
    margin: "0.5rem auto 3rem auto",
  };

  const onUploadImage = useCallback((e) => {
    if (!e.target.files) {
      return;
    }
    // 이미지 미리보기
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };

    console.log(e.target.files[0].name);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!imageInputRef.current) {
      return;
    }
    imageInputRef.current.click();
  }, []);

  const onClickDropdown = () => {
    setDropdownVisibility((boolean) => !boolean);
  };
  const onClickDropSelect = (nation) => {
    setDropdownVisibility((boolean) => !boolean);
    setNationLang(nation);
  };

  return (
    <div className={classes.background}>
      <div className={classes.logo_container}>
        <Logo />
      </div>
      <UserCard style={style}>
        <div className={classes.step_box}>STEP 2</div>
        <div className={classes.title}>PROFILE</div>
        <div className={classes.sub_title}>Fill Your Infomation Out</div>
        <form className={classes.form}>
          <label className={classes.label}>Profile Photo (Optional)</label>
          <input
            className={classes.image_input}
            type="file"
            accept="image/*"
            onChange={onUploadImage}
            ref={imageInputRef}
          ></input>
          <div
            onClick={onUploadImageButtonClick}
            className={classes.image_preview_box}
            style={{ backgroundImage: `url(${imgFile})` }}
          >
            <div className={classes.image_preview_plus}>+</div>
          </div>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Nick Name
          </label>
          <input className={classes.input} type="text"></input>
          <label className={`${classes.label} ${classes.margin_add}`}>
            Contry
          </label>
          <div className={classes.input_dropdown}>
            {nationLang}
            <div
              className={classes.dropdown_arrow_box}
              onClick={onClickDropdown}
            >
              <Arrow_down width="100%" height="100%" />
            </div>
            <Drowdown
              naitonList={nationList}
              handleSelect={onClickDropSelect}
              visibility={dropdownVisibility}
            />
          </div>
          <radio className={classes.radio}>
            <input className={classes.radio_checkbox} type="checkbox" />
            <span className={classes.radio_span}>
              I agree with policy of the website
            </span>
          </radio>
          <button className={classes.next_btn}>NEXT</button>
        </form>
      </UserCard>
    </div>
  );
};

export default SignSetProfile;
