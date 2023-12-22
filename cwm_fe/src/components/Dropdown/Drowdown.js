import classes from "./Drowdown.module.css";

const Drowdown = (props) => {
  return (
    <ul
      className={`${classes.dropdwon_ul} ${
        props.visibility ? classes.dropdown_true : classes.dropdown_fales
      }`}
    >
      {props.naitonList.map((countryName) => (
        <li
          className={classes.li}
          onClick={() => props.handleSelect(countryName)}
        >
          {countryName}
        </li>
      ))}
    </ul>
  );
};

export default Drowdown;
