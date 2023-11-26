import styles from "../styles/Aside.module.css";
import Genres from "./Genres";
import Platforms from "./Platforms";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Platforms />
      <Genres />
    </aside>
  );
};

export default Aside;
