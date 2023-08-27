import React, { FunctionComponent } from "react";
import Planet from "../Planet/Planet";
import PersonalListItem from "../UI/PersonalListItem/PersonalListItem";
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
          <PersonalListItem title='NAME' value={name} />
          <PersonalListItem title='EMAIL' value={email} />
          <PersonalListItem title='WALLET' value={wallet} />
        </div>
      </div>
      <div className={styles.planet}>
        <Planet isMainPage={false}/>
      </div>
    </section>
  );
};

export default PersonalData;
