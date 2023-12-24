import classes from "./SeoulMap.module.css";
import Card from "../Layout/Card";
import { useState } from "react";
import CitySelection from "./CitySelection";

import { ReactComponent as Arrow_left_green } from "../../Svg/arrow_left.svg";
import { ReactComponent as Seoul } from "../../Svg/SeoulMap/Seoul.svg";
import { ReactComponent as Dobong } from "../../Svg/SeoulMap/Dobong.svg";
import { ReactComponent as Dongdaemun } from "../../Svg/SeoulMap/Dongdaemun.svg";
import { ReactComponent as Dongjak } from "../../Svg/SeoulMap/Dongjak.svg";
import { ReactComponent as Eunpyeong } from "../../Svg/SeoulMap/Eunpyeong.svg";
import { ReactComponent as Gangbuk } from "../../Svg/SeoulMap/Gangbuk.svg";
import { ReactComponent as Gangdong } from "../../Svg/SeoulMap/Gangdong.svg";
import { ReactComponent as Gangnam } from "../../Svg/SeoulMap/Gangnam.svg";
import { ReactComponent as Gangseo } from "../../Svg/SeoulMap/Gangseo.svg";
import { ReactComponent as Geumcheon } from "../../Svg/SeoulMap/Geumcheon.svg";
import { ReactComponent as Guro } from "../../Svg/SeoulMap/Guro.svg";
import { ReactComponent as Gwanak } from "../../Svg/SeoulMap/Gwanak.svg";
import { ReactComponent as Gwangjin } from "../../Svg/SeoulMap/Gwangjin.svg";
import { ReactComponent as Jongno } from "../../Svg/SeoulMap/Jongno.svg";
import { ReactComponent as Jung } from "../../Svg/SeoulMap/Jung.svg";
import { ReactComponent as JungNang } from "../../Svg/SeoulMap/JungNang.svg";
import { ReactComponent as Mapo } from "../../Svg/SeoulMap/Mapo.svg";
import { ReactComponent as Nowon } from "../../Svg/SeoulMap/Nowon.svg";
import { ReactComponent as Seocho } from "../../Svg/SeoulMap/Seocho.svg";
import { ReactComponent as Seodaemun } from "../../Svg/SeoulMap/Seodaemun.svg";
import { ReactComponent as Seongdong } from "../../Svg/SeoulMap/Seongdong.svg";
import { ReactComponent as Songpa } from "../../Svg/SeoulMap/Songpa.svg";
import { ReactComponent as Sungbuk } from "../../Svg/SeoulMap/Sungbuk.svg";
import { ReactComponent as Yangcheon } from "../../Svg/SeoulMap/Yangcheon.svg";
import { ReactComponent as Yeoungdeungpo } from "../../Svg/SeoulMap/Yeoungdeungpo.svg";
import { ReactComponent as Yongsan } from "../../Svg/SeoulMap/Yongsan.svg";

const SeoulMap = (props) => {
  const [citySelectList, setCitySelectList] = useState([]);
  const handleCitySelectList = (list) => {
    setCitySelectList(list);
  };
  const style = {
    marginTop: "3rem",
  };
  const componentMap = {
    Dobong,
    Dongdaemun,
    Dongjak,
    Eunpyeong,
    Gangbuk,
    Gangdong,
    Gangnam,
    Gangseo,
    Geumcheon,
    Guro,
    Gwanak,
    Gwangjin,
    Jongno,
    Jung,
    JungNang,
    Mapo,
    Nowon,
    Seocho,
    Seodaemun,
    Seongdong,
    Songpa,
    Sungbuk,
    Yangcheon,
    Yeoungdeungpo,
    Yongsan,
  };

  return (
    <Card style={style}>
      {/* <div className={classes.arrow_container}>
        <Arrow_left_green width="100%" height="100%" stroke="#d1ff00" />
      </div> */}
      <div className={classes.map_title_container}>
        <span className={classes.map_title}>WHERE DO YOU WANT</span>
        <span className={classes.map_title}>TO EXPLORE IN SEOUL</span>
      </div>
      <div className={classes.map_img_outer_container}>
        <div className={classes.map_img_container}>
          <Seoul width="100%" height="100%" />
        </div>
        {citySelectList.map((name) => {
          const CustomComponent = componentMap[name];
          return (
            <div className={classes.map_img_container}>
              <CustomComponent />
            </div>
          );
        })}
      </div>
      <CitySelection handleCitySelectList={handleCitySelectList} />
    </Card>
  );
};

export default SeoulMap;
