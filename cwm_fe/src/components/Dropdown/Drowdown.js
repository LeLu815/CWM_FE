import classes from "./Drowdown.module.css";

const Drowdown = (props) => {
  return (
    <ul
      className={`${classes.dropdwon_ul} ${
        props.visibility ? classes.dropdown_true : classes.dropdown_fales
      }`}
    >
      {props.naitonList.map((countryName, index) => (
        <li className={classes.li} onClick={() => props.handleSelect(index)}>
          {countryName}
        </li>
      ))}
    </ul>
  );
};

export default Drowdown;
