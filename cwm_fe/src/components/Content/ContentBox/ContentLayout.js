import classes from "./ContentLayout.module.css";
import ContentBox from "./ContentBox";

const ContentLayout = (props) => {
  return (
    <>
      <div className={classes.parent_container}>
        {props.dataList.map((data) => (
          <ContentBox path={data.path} title={data.title} desc={data.desc} />
        ))}
      </div>
      <div className={classes.bottom_container}></div>
    </>
  );
};
export default ContentLayout;
