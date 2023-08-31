import { FunctionComponent } from "react";
import styles from "./ListItem.module.css";
import closeIcn from "../../../../assets/images/close.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useNavigate } from "react-router";
import Typography from "../../../UI/Typography/Typography";

interface IProps {
  id?: number;
  username: string;
  email: string;
  address?: string;
  index: number;
  onDelete: () => void;
}

const ListItem: FunctionComponent<IProps> = ({
  id,
  username,
  email,
  address,
  index,
  onDelete,
}) => {
  const navigate = useNavigate();

  const { profile } = useSelector((state: RootState) => state.profile);

  return (
    <div
      style={username !== profile?.username ? { cursor: "pointer" } : {}}
      className={styles.container}
      onClick={() =>
        username !== profile?.username ? navigate(`user/${id}`) : null
      }
    >
      <Typography
        type="p_additional"
        color={
          index === 0 && username === profile?.username ? "#E75626" : "#fff"
        }
        style={{ width: "25%" }}
      >
        {username}
      </Typography>
      <Typography
        type="p_additional"
        color={
          index === 0 && username === profile?.username ? "#E75626" : "#fff"
        }
        style={{ width: "38%" }}
      >
        {email}
      </Typography>
      <Typography
        type="p_additional"
        color={
          index === 0 && username === profile?.username ? "#E75626" : "#fff"
        }
        style={{
          width: "38%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {address}
      </Typography>
      {index === 0 && username === profile?.username ? (
        <img
          onClick={onDelete}
          style={{ marginLeft: "17px", cursor: "pointer" }}
          src={closeIcn}
          alt="delete"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ListItem;
