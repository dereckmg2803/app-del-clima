import React, { useState } from 'react';

function SearchCity({ setShowSearch }) {
  const [city, setCity] = useState('');

  return (
    <div className="search-container">
      <h2>Buscar Ciudad</h2>
      <input 
        type="text" 
        placeholder="Escribe el nombre de la ciudad..." 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <button>Buscar</button>
      <button onClick={() => setShowSearch(false)}>Volver</button>
    </div>
  );
}

export default SearchCity;
