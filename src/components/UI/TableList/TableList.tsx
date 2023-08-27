import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setParticipants } from "../../../features/participants/participantsSlice";
import ListItem from "./ListItem/ListItem";
import styles from "./TableList.module.css";

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
        <h3 className={styles.firstTitle}>NAME</h3>
        <h3 className={styles.secondTitle}>EMAIL</h3>
        <h3 className={styles.thirdTitle}>WALLET</h3>
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
