import React, { useState } from 'react'

function Weather({ weather, image }) {
//    console.log(weather);

    const [isFah, setIsFah] = useState(false)

    const temperature = isFah ? `${(weather.temp * 9 / 5) + 32} °F` : `${weather.temp} °C`
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    
      }}
    >
        <div className='title'>
        <h1>Weather app</h1>
        </div>
        <p>{weather.city}, {weather.country}</p>
        <div>
            {/* <img src="" alt="" /> */}
            <div className='information'>
                <h2>{weather.description}</h2>
                <ul>
                    <li>Wind Speed {weather.speed}m/s</li>
                    <li>Clouds {weather.clouds}%</li>
                    <li>Pressure {weather.pressure}hPa</li>
                </ul>
            </div>
        </div>
        <div>
            <h3>{temperature}</h3>
            <button onClick={() => setIsFah(!isFah)}>
                Change to °F {isFah ? 'Celsius': 'Fahrenheit'}
            </button>
        </div>
        </div>
  )
}

export default Weather