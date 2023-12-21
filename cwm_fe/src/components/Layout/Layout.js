import classes from "./Layout.module.css";

const Layout = (props) => {
  return <div className={classes.classes}>{props.children}</div>;
};

export default Layout;
