import classes from "./SelectedContent.module.css";
import { ReactComponent as X_emoji } from "../../Svg/x_thine.svg";

const SelectedContent = (props) => {
  const korean = props.korList;
  const currentList = props.currList;
  const index = korean.indexOf(props.value);

  const handleCLick = () => {
    props.handleIsClicked({ data: props.value, boolean: false });
  };

  return (
    <div className={classes.selected_container}>
      <span className={classes.text}>{currentList[index]}</span>
      <div className={classes.x_box_size} onClick={handleCLick}>
        <X_emoji width="100%" heigth="100%" />
      </div>
    </div>
  );
};

export default SelectedContent;
