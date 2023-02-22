import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});

  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.detail}>
      <div className={style.container}>
        <div className={style.containerImg}>
          <span className={style.image}></span>
        </div>
        <div className={style.imgContainer}>
          <img
            className={style.img}
            src={character.image}
            alt={character.name}
          />
          <h2 className={style.origin}>Origin: {character?.origin?.name}</h2>
        </div>
        <div className={style.informacion}>
          <h2 className={style.name}>{character.name}</h2>
          <h2 className={style.pos}>Status: {character.status}</h2>
          <h2 className={style.pos}>Specie: {character.species}</h2>
          <h2 className={style.pos}>Gender: {character.gender}</h2>
        </div>
      </div>
    </div>
  );
}
