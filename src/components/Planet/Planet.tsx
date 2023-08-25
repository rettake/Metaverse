import React from "react";
import styles from "./Planet.module.css";
import planeta from "../../assets/images/planeta.png";

const Planet = () => {
  return (
    <div className={styles.ellipse}>
      <div className={styles.ellipse__outlined}>
        <img className={styles.image} src={planeta} alt="planet" />
      </div>
    </div>
  );
};

export default Planet;
