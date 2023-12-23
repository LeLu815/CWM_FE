import classes from "./CitySelcetionItem.module.css";
import { useEffect, useState } from "react";

const CitySelcetionItem = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const id = props.city.name;
  const checked = props.city.checked;

  const handleCLick = () => {
    props.onCityChange(id);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <label key={props.city.name}>
      <span
        className={`${classes.city_name} ${
          isHovering ? classes.glow_color : classes.nomal_color
        }  ${checked ? classes.clicked : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleCLick}
      >
        {props.city.englishName.split("-")[0]}
      </span>
    </label>
  );
};

export default CitySelcetionItem;
