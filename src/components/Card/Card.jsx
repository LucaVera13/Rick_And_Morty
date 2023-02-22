import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, gender, onClose, image, species }) {
  return (
    <div className={styles.card}>
      <div className={styles.character}>
        <button className={styles.button} onClick={onClose}>
          X
        </button>
        <Link to={`/detail/${id}`} className={styles.link}>
          <h3>{name}</h3>
          <img className={styles.cardImage} src={image} alt={name} />
        </Link>
      </div>
      <div className={styles.dataContainer}>
        <h2 className={styles.data}>{species}</h2>
        <h2 className={styles.data}>{gender}</h2>
      </div>
    </div>
  );
}
