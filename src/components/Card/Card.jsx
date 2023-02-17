import styles from "./Card.module.css";

export default function Card({ name, gender, onClose, image, species }) {
  return (
    <div className={styles.card}>
      <div className={styles.character}>
        <button className={styles.button} onClick={onClose}>
          X
        </button>
        <h3>{name}</h3>
        <img className={styles.cardImage} src={image} alt={name} />
      </div>
      <div className={styles.dataContainer}>
        <h2 className={styles.data}>{species}</h2>
        <h2 className={styles.data}>{gender}</h2>
      </div>
    </div>
  );
}
