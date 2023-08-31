import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setParticipants } from "../../../features/participants/participantsSlice";
import ListItem from "./ListItem/ListItem";
import styles from "./TableList.module.css";
import Typography from "../../UI/Typography/Typography";

const TableList: FunctionComponent = () => {
  const dispatch = useDispatch()

  const { profiles } = useSelector(
    (state: RootState) => state.profiles
  );

  const onDelete = () => {
    dispatch(setParticipants(profiles.slice(1)))
  };

  return (
    <div>
      <div className={styles.header}>
        <Typography type='h4' color="#fff" style={{width: "25%"}}>
          NAME
        </Typography>
        <Typography type='h4' color="#fff" style={{width: "38%"}}>
        EMAIL
        </Typography>
        <Typography type='h4' color="#fff" style={{width: "38%"}}>
        WALLET
        </Typography>
      </div>
      <div className={styles.item}>
        {profiles.map((item, index) => (
          <ListItem
            id={item.id}
            onDelete={onDelete}
            key={item.id}
            index={index}
            username={item.username}
            email={item.email}
            address={item.address}
          />
        ))}
      </div>
    </div>
  );
};

export default TableList;
