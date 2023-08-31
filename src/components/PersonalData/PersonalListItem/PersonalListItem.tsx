import { FunctionComponent } from "react";
import styles from "./PersonalListItem.module.css";
import Typography from "../../../shared/UI/Typography/Typography";

interface IProps {
  title?: string;
  value?: string;
}

const PersonalListItem: FunctionComponent<IProps> = ({ title, value }) => {
  return (
    <div className={styles.list__item}>
      <Typography type='h4' color="#fff">{title}</Typography>
      <Typography type="h3" color="#E75626">
        {value}
      </Typography>
    </div>
  );
};

export default PersonalListItem;
