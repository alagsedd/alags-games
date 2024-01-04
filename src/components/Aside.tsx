import styles from "../styles/Aside.module.css";
import Genres from "./Genres";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Genres />
    </aside>
  );
};

export default Aside;
