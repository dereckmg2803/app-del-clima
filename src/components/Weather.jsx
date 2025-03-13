import React, { useState } from 'react';

function Weather({ weather, background, image, setShowSearch }) {
  const [isFah, setIsFah] = useState(false);
  const temperature = isFah ? `${((weather.temp * 9 / 5) + 32).toFixed(2)} °F` : `${weather.temp.toFixed(2)} °C`;

  return (
    <div
      className="grid-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="item header">
        <span className="title">
          <h1>App del clima</h1>
        </span>

        <div className="info">
          <p>{weather.city}, {weather.country}</p>
        </div>

        <div className="search-btn">
        <button onClick={() => setShowSearch(true)}>Buscar otra ciudad</button>

        </div>
      </div>


      <div className="item icon" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} />

      <div className="item middle">
        <h1>"{weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}"</h1>
        <ul>
          <li className="weather-info velocidad">
            Velocidad del viento: <span className="value">{weather.speed}m/s</span>
          </li>
          <li className="weather-info">
            Nubes: <span className="value">{weather.clouds}%</span>
          </li>
          <li className="weather-info">
            Presión: <span className="value">{weather.pressure}hPa</span>
          </li>
        </ul>
      </div>

      <div className="item footer">
        <h3>{temperature}</h3>
        <button onClick={() => setIsFah(!isFah)}>
          Cambiar a {isFah ? '°C' : '°F'}
        </button>
      </div>
    </div>
  );
}

export default Weather;
