import Aside from "../components/Aside";
import GamesGrid from "../components/GamesGrid";
import Slider from "../components/Slider";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.asideBox}>
          {" "}
          <Aside />
        </div>

        <div className={styles.sliderBox}>
          <Slider />
        </div>

        <div className={styles.gamesBox}>
          <GamesGrid />
        </div>
      </div>
    </>
  );
};

export default HomePage;
