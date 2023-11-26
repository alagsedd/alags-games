import { useContext, useRef } from "react";
import styles from "../styles/NavBar.module.css";
import SearchContext from "../contexts/OnSearchContext";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { dispatch } = useContext(SearchContext);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      dispatch({ type: "handleSearch", search: searchRef.current.value });
      searchRef.current.value = "";
    }
    console.log("Searching");
  };
  return (
    <nav className={styles.nav}>
      <Link to={"/"}>
        <CiHome size="30" />
      </Link>
      <div className={styles.child}>
        <h1 className={styles.header}>A-Games</h1>

        <form onSubmit={handleSearchSubmit}>
          {" "}
          <input
            ref={searchRef}
            placeholder="Search 89,000 games"
            type="text"
            className={styles.input}
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
