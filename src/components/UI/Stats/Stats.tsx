import React, { FunctionComponent } from "react";
import styles from "./Stats.module.css";

interface IProps {
  count: string;
  title: string;
}

const Stats: FunctionComponent<IProps> = ({ count, title }) => {
  return (
    <div className={styles.main}>
      <p className={styles.count}>{count}</p>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Stats;
