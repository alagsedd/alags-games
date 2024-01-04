import GenreCard from "../cards/GenreCard";
import { RiLoader2Line } from "react-icons/ri";
import useGenres from "../services/useGenres";
import styles from "../styles/Genres.module.css";
import { useContext, useState } from "react";
import GenreContext from "../contexts/OnSelectGenreContext";
import GenreSkeletonCard from "../cards/GenreSkeletonCard";
import { Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const Genres = () => {
  const page_size = 30;
  const [page, setPage] = useState(1);
  const { data: genres, isLoading } = useGenres({ page_size, page });

  const { dispatch } = useContext(GenreContext);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className={styles.parent}>
        <h1 className={styles.headerOne}>
          <span>Genres</span>
        </h1>

        {isLoading && skeletons.map((i) => <GenreSkeletonCard key={i} />)}

        {genres?.results.map((item) => (
          <GenreCard
            onSelectGenre={() => {
              dispatch({ type: "handleGenreSelection", genre: item.slug });
              console.log(item.slug, "Clicked");
            }}
            image={getCroppedImageUrl(item.image_background)}
            name={item.name}
            key={item.id}
          />
        ))}

        <div className={styles.buttonBox}>
          <Button
            size="small"
            onClick={() => setPage(page + 1)}
            color="inherit"
            leftIcon={<RiLoader2Line />}
            variant="outlined"
          >
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Genres;
