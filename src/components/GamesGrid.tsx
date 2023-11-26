import { useContext, useState } from "react";
import useGames from "../services/useGames";
import styles from "../styles/GamesGrid.module.css";
import GameCard from "../cards/GameCard";
import { Button } from "@mui/material";
import { RiLoader2Line } from "react-icons/ri";
import SkeletonCard from "../cards/SkeletonCard";
import GenreContext from "../contexts/OnSelectGenreContext";
import { Link } from "react-router-dom";
import PlatformContext from "../contexts/onSelectPlatformContext";
import SearchContext from "../contexts/OnSearchContext";

const GamesGrid = () => {
  const [page, setPage] = useState(1);
  const page_size = 20;

  const { genre } = useContext(GenreContext);
  const { platformId } = useContext(PlatformContext);
  const { search } = useContext(SearchContext);

  const { data, isLoading, error } = useGames({
    page,
    page_size,
    platformId,
    genre,
    search,
  });

  if (error) return <h1>{error.message}</h1>;

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {isLoading && skeletons.map((i) => <SkeletonCard key={i} />)}
      <div className={styles.parent}>
        {data?.results.map((item, index) => (
          <Link
            className={styles.link}
            key={index}
            to={`/game-details/${item.slug}`}
          >
            <GameCard
              image={item.background_image}
              name={item.name}
              key={item.id}
            />
          </Link>
        ))}
      </div>
      <div className={styles.buttonBox}>
        <Button
          size="small"
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
