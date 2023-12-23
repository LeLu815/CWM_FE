import classes from "./CitySelection.module.css";
import { useState, useEffect } from "react";
import CitySelcetionItem from "./CitySelcetionItem";

const CitySelection = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cityList, setCityList] = useState([
    { name: "동작구", englishName: "Dongjak", number: "1", checked: false },
    { name: "종로구", englishName: "Jongno", number: "2", checked: false },
    { name: "중구", englishName: "Jung", number: "3", checked: false },
    { name: "용산구", englishName: "Yongsan", number: "4", checked: false },
    { name: "성동구", englishName: "Seongdong", number: "5", checked: false },
    { name: "광진구", englishName: "Gwangjin", number: "6", checked: false },
    {
      name: "동대문구",
      englishName: "Dongdaemun",
      number: "7",
      checked: false,
    },
    { name: "중랑구", englishName: "JungNang", number: "8", checked: false },
    { name: "성북구", englishName: "Sungbuk", number: "9", checked: false },
    { name: "강북구", englishName: "Gangbuk", number: "10", checked: false },
    { name: "도봉구", englishName: "Dobong", number: "11", checked: false },
    { name: "노원구", englishName: "Nowon", number: "12", checked: false },
    { name: "은평구", englishName: "Eunpyeong", number: "13", checked: false },
    {
      name: "서대문구",
      englishName: "Seodaemun",
      number: "14",
      checked: false,
    },
    { name: "마포구", englishName: "Mapo", number: "15", checked: false },
    { name: "양천구", englishName: "Yangcheon", number: "16", checked: false },
    { name: "강서구", englishName: "Gangseo", number: "17", checked: false },
    { name: "구로구", englishName: "Guro", number: "18", checked: false },
    { name: "금천구", englishName: "Geumcheon", number: "19", checked: false },
    {
      name: "영등포구",
      englishName: "Yeoungdeungpo",
      number: "20",
      checked: false,
    },
    { name: "관악구", englishName: "Gwanak", number: "21", checked: false },
    { name: "서초구", englishName: "Seocho", number: "22", checked: false },
    { name: "강남구", englishName: "Gangnam", number: "23", checked: false },
    { name: "송파구", englishName: "Songpa", number: "24", checked: false },
    { name: "강동구", englishName: "Gangdong", number: "25", checked: false },
  ]);

  const handleCityCheck = (cityName) => {
    setCityList((list) => {
      return list.map((cityinfo) => {
        if (cityinfo.name === cityName) {
          return { ...cityinfo, checked: !cityinfo.checked };
        }
        return cityinfo;
      });
    });
  };
  const handleAllCityCheck = () => {
    setCityList((list) => {
      return list.map((cityinfo) => {
        return { ...cityinfo, checked: isClicked ? false : true };
      });
    });
    setIsClicked((isClicked) => !isClicked);
  };

  useEffect(() => {
    const selectedCityList = [];

    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].checked) {
        selectedCityList.push(cityList[i].englishName);
      }
    }
    props.handleCitySelectList(selectedCityList);
  }, [cityList]);

  return (
    <>
      <fieldset className={classes.city_container}>
        {cityList.length === 0 ? (
          <div>Sorry. Not Found</div>
        ) : (
          cityList.map((city) => (
            <CitySelcetionItem
              city={city}
              key={city.name}
              checked={city.checked}
              onCityChange={handleCityCheck}
            >
              {city.englishName}
            </CitySelcetionItem>
          ))
        )}
      </fieldset>
      <div className={classes.checkbox_container}>
        <div
          className={`${classes.checkbox} ${
            isClicked ? classes.checked : classes.not_checked
          }`}
          onClick={handleAllCityCheck}
        >
          SELLCT ALL
        </div>
      </div>
    </>
  );
};

export default CitySelection;
