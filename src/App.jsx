import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import {
  clear, clouds, drizzle, mist, rain, snow, thunderstom,
  clearI, cloudsI,drizzleI, mistI, rainI, snowI, thunderstomI,

} from './assets'

// Se importa la llave del archivo .env
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

//array de imagenes
const backgrounds = [clear, clouds, drizzle, mist, rain, snow, thunderstom];
const images = [clearI, cloudsI, drizzleI, mistI, rainI, snowI, thunderstomI];

const codes = {
  thunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  drizzle: [300, 301, 302, 310, 311, 312, 313, 314, 321],
  rain: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
  snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
  clear: [800],
  clouds: [801, 802, 803, 804]
}



function App() {
  const [coords, setCoords] = useState(null)
  const [weather, setWeather] = useState(null)
  const [message, setMessage] = useState('')
  const [loader,  setLoader] = useState(null)
  const [background, setBackground] = useState(images);
  const [image, setImage] = useState(images);

  useEffect(() => {
    if (window.navigator.geolocation) {
      function success({coords}) {
        const { latitude, longitude } = coords
        setCoords({ lat: latitude, lon: longitude})
      
      }

      function error (error) {
        console.log('Permission denied');
        setMessage('Permission denied')
      }

      navigator.geolocation.getCurrentPosition(success, error);
    } else{
      console.log('Geolocation is not supported by this browser.');
    }
  }, [])

  useEffect(() => {
    if (coords) {
      axios.get(`${BASE_URL}lat=${coords.lat}&lon=${coords.lon}&units=metric&lang=es&appid=${API_KEY}`)
        .then((res) => {
          const iconCodeId = res.data.weather[0].id; // Aquí usas el id real de la API
          console.log('este es el id', iconCodeId);
  
          const keys = Object.keys(codes);
          const weatherType = keys.find((k) => codes[k].includes(iconCodeId));
          console.log('este es el weather', weatherType);
  
          setWeather({
            city: res.data.name,
            country: res.data.sys.country,
            temp: res.data.main.temp,
            description: res.data.weather[0].description,
            id: iconCodeId,
            speed: res.data.wind.speed,
            clouds: res.data.clouds.all,
            pressure: res.data.main.pressure
          });
  
          // Mapeo de tipos de clima a imágenes
          const weatherBackgrounds = {
            clear: backgrounds[0],
            clouds: backgrounds[1],
            drizzle: backgrounds[2],
            atmosphere: backgrounds[3],
            rain: backgrounds[4],
            snow: backgrounds[5],
            thunderstorm: backgrounds[6],
          };

          const weatherImages = {
            clear: images[0],
            clouds: images[1],
            drizzle: images[2],
            atmosphere: images[3],
            rain: images[4],
            snow: images[5],
            thunderstorm: images[6],
          };
  
          // Establecer la imagen en base al tipo de clima
          if (weatherType) {
            setBackground(weatherBackgrounds[weatherType]);
            setImage(weatherImages[weatherType])
          }
        });
    }
  }, [coords]);
  return (
    
    <>
    {weather && <Weather weather={weather} background={background} image={image} />}
    <h1>{message}</h1>
{/* <h1>App {JSON.stringify(weather)}</h1> */}
{/* <div>
  <h1>Weather</h1>
<pre>JSON.stringify(weather, null, 2)</pre>

</div> */}
    </>
  )
}

export default App
