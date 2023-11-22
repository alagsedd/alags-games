import Aside from "../components/Aside";
import GamesGrid from "../components/GamesGrid";
import NavBar from "../components/NavBar";
import SiteName from "../components/SiteName";
import Slider from "../components/Slider";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.siteName}>
          <SiteName />
        </div>

        <div className={styles.navBox}>
          <NavBar />
        </div>

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
