import styles from "../styles/SkeletonCard.module.css";

const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.name}></div>
    </div>
  );
};

export default SkeletonCard;
