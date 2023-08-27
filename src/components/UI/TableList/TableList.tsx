import React, { FunctionComponent, useState } from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./TableList.module.css";

interface IProps {
  profile: any;
  items: any;
}

const TableList: FunctionComponent<IProps> = ({ profile, items }) => {

  const [list, setList] = useState([{ id: Date.now(), ...profile }, ...items])

  const onDelete = () => {
    setList(list.slice(1))
  };

  console.log(list);

  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.firstTitle}>NAME</h3>
        <h3 className={styles.secondTitle}>EMAIL</h3>
        <h3 className={styles.thirdTitle}>WALLET</h3>
      </div>
      <div className={styles.item}>
        {list.map((item, index) => (
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
