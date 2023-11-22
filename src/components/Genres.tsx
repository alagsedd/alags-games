import { Button } from "@mui/material";
import GenreCard from "../cards/GenreCard";
import { RiLoader2Line } from "react-icons/ri";
import useGenres from "../services/useGenres";
import Spinner from "react-bootstrap/Spinner";
import styles from "../styles/Genres.module.css";
import { useState } from "react";

const Genres = () => {
  const page_size = 15;
  const [page, setPage] = useState(1);
  const { data: genres, isLoading } = useGenres({ page_size, page });

  if (isLoading) return <Spinner animation="grow" />;
  return (
    <div className={styles.parent}>
      <h1 className={styles.headerOne}>
        <span>Genres</span>
      </h1>
      {genres?.results.map((item) => (
        <GenreCard
          image={item.image_background}
          name={item.name}
          key={item.id}
        />
      ))}

      <div className={styles.buttonBox}>
        <Button
          onClick={() => setPage(page + 1)}
          color="inherit"
          startIcon={<RiLoader2Line />}
          variant="outlined"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default Genres;
