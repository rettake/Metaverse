import React, { FunctionComponent } from "react";
import Planet from "../Planet/Planet";
import styles from "./PersonalData.module.css";

interface IProps {
  name?: string;
  email?: string;
  wallet?: string;
}

const PersonalData: FunctionComponent<IProps> = ({ name, email, wallet }) => {
  return (
    <section className={styles.main}>
      <div>
        <h2 className={styles.title}>PERSONAL DATA</h2>
        <div className={styles.list}>
          <div className={styles.list__item}>
            <h3 className={styles.list__title}>NAME</h3>
            <p className={styles.list__text}>{name}</p>
          </div>
          <div className={styles.list__item}>
            <h3 className={styles.list__title}>EMAIL</h3>
            <p className={styles.list__text}>{email}</p>
          </div>
          <div className={styles.list__item}>
            <h3 className={styles.list__title}>WALLET</h3>
            <p className={styles.list__text}>{wallet}</p>
          </div>
        </div>
      </div>
      <div className={styles.planet}>
        <Planet />
      </div>
    </section>
  );
};

export default PersonalData;
