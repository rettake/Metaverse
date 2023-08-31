import React, { FunctionComponent } from "react";
import Planet from "../Planet/Planet";
import PersonalListItem from "./PersonalListItem/PersonalListItem";
import styles from "./PersonalData.module.css";
import Typography from "../UI/Typography/Typography";

interface IProps {
  name?: string;
  email?: string;
  wallet?: string;
}

const PersonalData: FunctionComponent<IProps> = ({ name, email, wallet }) => {
  return (
    <section className={styles.main}>
      <div>
        <Typography type="h1" color="#fff" style={{ marginBottom: "48px" }}>
          PERSONAL DATA
        </Typography>
        <div className={styles.list}>
          <PersonalListItem title="NAME" value={name} />
          <PersonalListItem title="EMAIL" value={email} />
          <PersonalListItem title="WALLET" value={wallet} />
        </div>
      </div>
      <div className={styles.planet}>
        <Planet isMainPage={false} />
      </div>
    </section>
  );
};

export default PersonalData;
