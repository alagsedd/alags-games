import { useContext, useState } from "react";
import useGames from "../services/useGames";
import styles from "../styles/GamesGrid.module.css";
import GameCard from "../cards/GameCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RiLoader2Line } from "react-icons/ri";
import SkeletonCard from "../cards/SkeletonCard";
import GenreContext from "../contexts/OnSelectGenreContext";
import { Link } from "react-router-dom";
import SearchContext from "../contexts/OnSearchContext";
import { Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GamesGrid = () => {
  const [page, setPage] = useState(1);
  const page_size = 20;

  const { genre } = useContext(GenreContext);
  const { search } = useContext(SearchContext);

  const { data, isLoading, error } = useGames({
    page,
    page_size,
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
              image={getCroppedImageUrl(item.background_image)}
              name={item.name}
              key={item.id}
            />
          </Link>
        ))}
      </div>
      <div className={styles.buttonBox}>
        <Button
          onClick={() => setPage(page + 1)}
          colorScheme="blue"
          leftIcon={<AiOutlineLoading3Quarters />}
          variant="solid"
        >
          Load more
        </Button>
      </div>
    </>
  );
};

export default GamesGrid;
