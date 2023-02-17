import React, { useState } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const cardRepeat = (dataId) => {
    const repetido = [];
    characters.map((elemento) => {
      if (elemento.id === dataId) {
        repetido.push("personaje repetido");
      }
    });
    return repetido;
  };
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          const repetidas = cardRepeat(data.id);
          repetidas.length === 0
            ? setCharacters((oldChars) => [...oldChars, data])
            : alert("No se pueden agregar personajes");
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className={styles.App} style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <div>
        <Cards onClose={onClose} characters={characters} />
      </div>
    </div>
  );
}

export default App;
