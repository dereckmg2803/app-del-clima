import { useState } from "react";

function SearchCity({ setShowSearch, onSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      onSearch(city); // Asegúrate de que `onSearch` es una función válida
    }
  };

  const handleClick = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="search-container">
      <h1>Buscar Ciudad</h1>
      <div className="input">
        <input
          type="text"
          placeholder="Escribe una ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown} // Cambié onKeyPress a onKeyDown
        />
      </div>
      <button onClick={handleClick}>Buscar</button>
      <button onClick={() => setShowSearch(false)}>Volver</button>
    </div>
  );
}

export default SearchCity;
