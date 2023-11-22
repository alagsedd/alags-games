import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <input
        placeholder="Search 89,000 games"
        type="text"
        className={styles.input}
      />
    </nav>
  );
};

export default NavBar;
