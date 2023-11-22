import styles from "../styles/GameCard.module.css";

interface Props {
  name: string;
  image: string;
}
const GameCard = ({ name, image }: Props) => {
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

export default GameCard;
