import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.container}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          id={id}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}
