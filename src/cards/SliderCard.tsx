import styles from "../styles/Slider.module.css";

interface Props {
  image: string;
}
const SliderCard = ({ image }: Props) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt="Your browser doesn't support this image"
        className={styles.image}
      />
    </div>
  );
};

export default SliderCard;
