import classes from "./OneLineLayout.module.css";
import ContentBox from "./ContentBox";

const OneLineLayout = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title_container}>
        <div className={classes.title_text}>TRAVEL TIPS</div>
        <div className={classes.title_see_more}>MORE +</div>
      </div>
      <div className={classes.parent_container}>
        {props.dataList.map((data, index) => (
          <ContentBox
            path={data.path}
            title={data.title}
            desc={data.desc}
            key={`index_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OneLineLayout;
