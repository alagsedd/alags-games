import styles from "../styles/GenreCard.module.css";

interface Props {
  name: string;
  image: string;
}
const GenreCard = ({ name, image }: Props) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt="Your browser doesn't support this image"
        className={styles.image}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default GenreCard;
