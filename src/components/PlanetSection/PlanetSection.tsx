import Stats from "./Stats/Stats";
import styles from "./PlanetSection.module.css";
import Planet from "../Planet/Planet";

import pln_svg from '../../assets/images/planet_text_svg.svg'
import Typography from "../../shared/UI/Typography/Typography";

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
          <Planet isMainPage={true}/>
          <img className={styles.image} src={pln_svg} alt="planet" />
        </div>
        <Typography
          type="p"
          color="#fff"
          style={{ marginTop: "35px", width: "420px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </div>
      <div className={styles.aside}>
        <Typography type="h3" color="#fff" style={{textAlign: "center"}}>Roadmap stats</Typography>
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
