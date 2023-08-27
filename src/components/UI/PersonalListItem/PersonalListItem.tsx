import { FunctionComponent } from "react";
import styles from "./PersonalListItem.module.css";

interface IProps {
  title?: string;
  value?: string;
}

const PersonalListItem: FunctionComponent<IProps> = ({ title, value }) => {
  return (
    <div className={styles.list__item}>
      <h3 className={styles.list__title}>{title}</h3>
      <p className={styles.list__text}>{value}</p>
    </div>
  );
};

export default PersonalListItem;
