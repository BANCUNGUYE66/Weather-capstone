const API_KEY = '4ffefc847431048ee9271c1ac89e9ad2';

const generateIconUrl = (iconId) => `https://www.openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL).then((res) => res.json());

  const {
    weather,
    coord: { lat, lon },
    main: {
      feels_like: feelsLike,
      humidity,
      pressure,
      temp,
      temp_max: tempMax,
      temp_min: tempMin,
    },
    name,
    dt,
    sys: { country, sunrise, sunset },
    wind: { speed },
  } = data;

  const { main: details, description, icon } = weather[0];

  return {
    lat,
    lon,
    feelsLike,
    humidity,
    pressure,
    temp,
    tempMax,
    tempMin,
    name,
    speed,
    description,
    country,
    sunrise,
    sunset,
    dt,
    details,
    iconURL: generateIconUrl(icon),
  };
};

export default getWeatherData;
