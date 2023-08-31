import React, { FunctionComponent } from "react";
import styles from "./Stats.module.css";
import Typography from "../../../shared/UI/Typography/Typography";

interface IProps {
  count: string;
  title: string;
}

const Stats: FunctionComponent<IProps> = ({ count, title }) => {
  return (
    <div className={styles.main}>
      <Typography type="h3" color="#E75626" style={{marginTop: "8px", letterSpacing: "1px"}}>{count}</Typography>
      <Typography type="h5" color="#fff" style={{marginTop: "12px"}}>{title}</Typography>
    </div>
  );
};

export default Stats;
