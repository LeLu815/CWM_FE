import classes from "./ContentLayout.module.css";
import ContentBox from "./ContentBox";

const ContentLayout = (props) => {
  return (
    <>
      <div className={classes.parent_container}>
        {props.dataList.map((data, index) => (
          <ContentBox
            path={data.path}
            title={data.title}
            desc={data.desc}
            key={`index_${index}`}
            id={data.id}
          />
        ))}
      </div>
      <div className={classes.bottom_container}></div>
    </>
  );
};
export default ContentLayout;
