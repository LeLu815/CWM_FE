import { Outlet } from "react-router-dom";
import classes from "./Home.module.css";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.home_container}>
        <CategoryNav />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
