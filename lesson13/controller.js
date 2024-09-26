export const makeRequestURL = (weatherParams) => {
  const appid = "538ef88fb61bc02850dec49c82dc63e6";
  const baseURL = "https://api.openweathermap.org/data/2.5/";
  const urlPath = weatherParams.isForecast ? "forecast" : "weather";
  const url = new URL(urlPath, baseURL);
  Object.entries(weatherParams).forEach(([key, value]) => {
    if (key !== "isForecast") url.searchParams.append(key, value);
  });
  url.searchParams.append("appid", appid);
  return url;
};

export const getWeatherParams = (elements) => {
  const weatherParams = [...elements].reduce((acc, el) => {
    if (el.type === "radio" || el.type === "checkbox") {
      if (el.checked) acc[el.name] = el.value;
    } else {
      if (el.type !== "submit") acc[el.name] = el.value;
    }
    return acc;
  }, {});
  return weatherParams;
};

export const prepareWeatherData = (data) => {
  return {
    date: new Date(data.dt * 1000),
    main: {
      temp: Math.round(data.main.temp) + tempUnitSymbol,
      feelsLike: Math.round(data.main.feels_like) + tempUnitSymbol,
    },
    sunrise: data.sunrise,
    sunset: data.sunset,
    weather: {
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    },
    wind: data.wind,
    clouds: data.clouds,
    rain: data.rain,
    snow: data.snow,
  };
};

export const prepareForecastData = (data) => {
  return data.list.map((weatherItem) => prepareWeatherData(weatherItem));
};
