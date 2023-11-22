import styles from "../styles/Aside.module.css";
import Genres from "./Genres";
import Platforms from "./Platforms";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Genres />

      <Platforms />
    </aside>
  );
};

export default Aside;
