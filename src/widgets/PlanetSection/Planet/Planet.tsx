import { FunctionComponent } from "react";
import styles from "./Planet.module.css";
import planet from "../../../assets/images/planet.webp";
import BlockTimer from "./CircleTimer/BlockTimer/BlockTimer";
import CircleTimer from "./CircleTimer/CircleTimer";

interface IProps {
  isMainPage: boolean;
}

const Planet: FunctionComponent<IProps> = ({ isMainPage }) => {
  return (
    <div className={styles.ellipse}>
      <div className={styles.blockWithTimer}>
        {isMainPage && <BlockTimer />}
      </div>
      <div className={styles.timer}>
        <CircleTimer
          duration={20}
          loop={true}
          strokeWidth={0.5}
          size={486}
          trackColor="transparent"
          fillColor="#E75626"
        />
      </div>
      <div className={styles.ellipse__outlined}>
        <img className={styles.image} src={planet} alt="planet" />
      </div>
    </div>
  );
};

export default Planet;
