import Stats from "../UI/Stats/Stats";
import styles from "./PlanetSection.module.css";
import Planet from "../Planet/Planet";

import pln from '../../assets/images/pln.png'

const stats = [
  {
    title: "Lorem ipsum dolor",
    count: "12,345",
  },
  {
    title: "Lorem ipsum dolor",
    count: "12,345",
  },
  {
    title: "Lorem ipsum dolor",
    count: "12,345",
  },
];

const PlanetSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>
            EXPLORE YOUR OWN PLANET <br /> IN
            <span className={styles.outlined}> OUR NEW</span> METAVERSE
          </h1>

          <Planet />
          <div className={styles.ellipse}>
            <div className={styles.ellipse__outlined}>
              <img className={styles.image} src={pln} alt="planet" />
            </div>
          </div>
        </div>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={styles.aside}>
        <h3>Roadmap stats</h3>
        <div>
          {stats.map((item, index) => (
            <Stats key={index} title={item.title} count={item.count} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;
