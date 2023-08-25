import React, { FunctionComponent } from "react";
import styles from "./ListItem.module.css";
import closeIcn from "../../../../assets/images/close.svg";
import { profile } from "console";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useNavigate } from "react-router";

interface IProps {
  id: number
  username: string;
  email: string;
  address: string;
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

  const { profile } = useSelector(
    (state: RootState) => state.profile
  );

  return (
    <div style={username !== profile?.username ? {cursor: "pointer"} : {}} className={styles.container} onClick={() => (username !== profile?.username ? navigate(`user/${id}`) : null )}>
      <h3
        style={index === 0 && username === profile?.username ? { color: "#E75626" } : {}}
        className={styles.firstRow}
      >
        {username}
      </h3>
      <h3
        style={index === 0 && username === profile?.username ? { color: "#E75626" } : {}}
        className={styles.secondRow}
      >
        {email}
      </h3>
      <h3
        style={index === 0 && username === profile?.username ? { color: "#E75626" } : {}}
        className={styles.thirdRow}
      >
        {address}
      </h3>
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
