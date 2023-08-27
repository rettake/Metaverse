import React, { useEffect } from "react";
import styles from "./Planet.module.css";
import planeta from "../../assets/images/planeta.png";
import BlockTimer from "./CircleTimer/BlockTimer/BlockTimer";

const Planet = () => {
  useEffect(() => {
    const circle: any = document.querySelector("#circle");
    if (circle) {
      const raduis = circle?.r.baseVal.value;
      const circumference = 2 * Math.PI * raduis;
      const timeValue = 750;
      let i = 0;
      const step: number = 400 / timeValue;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;
      const setProgressBar = (percent: number) => {
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      };

      const interval = setInterval(() => {
        if (++i == step) {
          clearInterval(interval);
        } else {
          setProgressBar(step * i);
        }
      }, 100);
    }
  }, []);

  return (
    <div className={styles.ellipse}>
      <div className={styles.blockWithTimer}>
        <BlockTimer />
      </div>
      <svg width={"486"} className={styles.timer} height={"486"}>
        <circle
          id={"circle"}
          width="1"
          stroke={"#E75626"}
          fill="transparent"
          r="243"
          cx="243"
          cy="243"
        />
      </svg>

      <div className={styles.ellipse__outlined}>
        <img className={styles.image} src={planeta} alt="planet" />
      </div>
    </div>
  );
};

export default Planet;
