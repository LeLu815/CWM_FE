import classes from "./OneLineLayout.module.css";
import ContentBox from "./ContentBox";
import { useContext } from "react";
import { AuthContext } from "../../../Context/ThemeContext";

const oneLineText = [
  {
    kor: "여행 추천",
    en: "TRAVEL TIPS",
    ja: "旅の追伸",
    zh: "旅行推荐",
    tw: "旅行推薦",
    th: "การส่งเสริมการท่องเที่ยว",
  },
  {
    kor: "보너스",
    en: "MORE",
    ja: "ボーナス",
    zh: "奖金",
    tw: "紅利",
    th: "โบนัส",
  },
];

const OneLineLayout = (props) => {
  const { currLang } = useContext(AuthContext);
  return (
    <div className={classes.container}>
      <div className={classes.title_container}>
        <div className={classes.title_text}>{oneLineText[0][currLang]}</div>
        <div
          className={classes.title_see_more}
        >{`${oneLineText[0][currLang]}+`}</div>
      </div>
      <div className={classes.parent_container}>
        {props.dataList.map((data, index) => (
          <ContentBox
            path={data.path}
            title={data.title}
            desc={data.desc}
            key={`index_${index}`}
            id={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OneLineLayout;
