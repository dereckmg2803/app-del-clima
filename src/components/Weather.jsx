import React, { useState } from 'react'

function Weather({weather}) {
//    console.log(weather);

    const [isFah, setIsFah] = useState(false)

    const temperature = isFah ? `${(weather.temp * 9 / 5) + 32} °F` : `${weather.temp} °C`
  return (
    <div>
        <h1>Weather app</h1>
        <p>{weather.city}, {weather.country}</p>
        <div>
            {/* <img src="" alt="" /> */}
            <div>
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