import classes from "./Search.module.css";
import Header from "../../components/header/Header";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import { AuthContext } from "../../Context/ThemeContext";
import DropDownContent from "../../components/Dropdown/DropDownContent";
import SelectedContent from "../../components/Dropdown/SelectedContent";
import ContentLayout from "../../components/Content/ContentBox/ContentLayout";

import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow_up } from "../../Svg/arrow_up.svg";
import { ReactComponent as Arrow_down } from "../../Svg/arrow_down.svg";

const style = {
  marginTop: "2rem",
};
const selectListObj = {
  kor: ["무료 입장", "애완동물", "공원", "조기오픈"],
  en: ["FREE ENTRANCE", "ALLOW PETS", "PARK", "OPEN EARLY"],
  ja: ["入場無料", "ペット", "公園", "早期オープン"],
  zh: ["免费入场", "宠物", "公园", "提前开放"],
  tw: ["免費入場", "寵物", "公園", ""],
  th: ["การเข้าฟรี", "สัตว์เลี้ยงดูเล่น", "คนงาน", "เปิดเร็ว"],
};

const pathList = [
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding. And My Hobby is listening CCM music and just sleeping! And my Favorit Food is pizza and my best fried's name is Lee Wan",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
  {
    path: "패스패스",
    title: "This is Title",
    desc: "hello My Name is LeeIn and I'm intersted in studying web coding",
  },
];

const Search = (props) => {
  const location = useLocation();
  const [categoryName, setCategoryName] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const { currLang } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState([]);

  // 더보기 검색할 데이터가 있으면 생기는 useState
  const [isMoreExist, setIsMoreExist] = useState(false);

  const searchTerm = location.state.searchTerm;

  const handleCategoryName = (list) => {
    setCategoryName(list);
  };

  // 드롭다운 함수
  const handleDropdwonClick = () => {
    setVisibility((boolean) => !boolean);
  };

  const onHandleDropDownClick = ({ data, boolean }) => {
    setSelectedValue((list) => {
      if (boolean) {
        return [...list, data];
      } else {
        return list.filter((item) => item !== data);
      }
    });
    // 여기서 검색 기능을 구현해야 한다.
  };

  return (
    <>
      <Header />
      <div className={classes.search_container}>
        <CategoryNav handleCategoryName={handleCategoryName} style={style} />
        <div className={classes.search_keyword_box}>{searchTerm}</div>
        <div className={classes.filter_box}>
          <div className={classes.filter_dropdown_outer}>
            <div
              className={`${classes.filter_dropdown} ${
                selectedValue.length === 0 ? classes.non_click : classes.click
              }`}
              onClick={handleDropdwonClick}
            >
              Filter
              <div className={classes.arrow_size}>
                {visibility ? (
                  <Arrow_up width="100%" height="100%" />
                ) : (
                  <Arrow_down width="100%" height="100%" />
                )}
              </div>
            </div>
            <div
              className={`${classes.filter_dropdown_contentbox} ${
                visibility ? "" : classes.is_visible
              }`}
            >
              {selectListObj[currLang].map((data, index) => {
                return (
                  <DropDownContent
                    key={`index_${index}`}
                    data={selectListObj["kor"][index]}
                    value={data}
                    handleIsClicked={onHandleDropDownClick}
                    selectedValue={selectedValue}
                    handleDropdwonClick={handleDropdwonClick}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes.selected_outer}>
            {selectedValue.map((data, index) => {
              return (
                <SelectedContent
                  key={`index_${index}`}
                  value={data}
                  currList={selectListObj[currLang]}
                  korList={selectListObj["kor"]}
                  handleIsClicked={onHandleDropDownClick}
                />
              );
            })}
          </div>
        </div>
        <ContentLayout dataList={pathList} />
        <div>See More</div>
      </div>
    </>
  );
};
export default Search;
