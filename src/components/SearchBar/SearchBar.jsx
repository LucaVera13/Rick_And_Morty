import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [character, setCharacters] = useState("");

  const handleChange = (event) => {
    setCharacters(
      event.target.value
      );
  };

  const handleAdd = (event) => {
    event.preventDefault();
    onSearch(character);
    setCharacters("");
  };

  return (
    <div>
      <input type="search" value={character} onChange={handleChange} />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
}
