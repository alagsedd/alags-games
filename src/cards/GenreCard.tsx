import styles from "../styles/GenreCard.module.css";

interface Props {
  name: string;
  image: string | undefined;
  onSelectGenre: () => void;
}
const GenreCard = ({ name, image, onSelectGenre }: Props) => {
  return (
    <div onClick={onSelectGenre} className={styles.card}>
      {image && (
        <img
          src={image}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />
      )}
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default GenreCard;
