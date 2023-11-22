import { useState } from "react";
import useGames from "../services/useGames";
import styles from "../styles/GamesGrid.module.css";
import GameCard from "../cards/GameCard";
import { Button } from "@mui/material";
import { RiLoader2Line } from "react-icons/ri";
import LinearBuffer from "./GamesGridLoader";

const GamesGrid = () => {
  const [page, setPage] = useState(1);
  const page_size = 20;
  const { data, isLoading, error } = useGames({ page, page_size });

  if (isLoading) return <LinearBuffer />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <div className={styles.parent}>
        {data?.results.map((item) => (
          <GameCard
            image={item.background_image}
            name={item.name}
            key={item.id}
          />
        ))}
      </div>
      <div className={styles.buttonBox}>
        <Button
          size="large"
          onClick={() => setPage(page + 1)}
          color="primary"
          startIcon={<RiLoader2Line />}
          variant="contained"
        >
          Load more
        </Button>
      </div>
    </>
  );
};

export default GamesGrid;
