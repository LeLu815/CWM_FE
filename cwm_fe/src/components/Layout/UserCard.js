import classes from "./UserCard.module.css";

const UserCard = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default UserCard;
