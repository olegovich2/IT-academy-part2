// делаем приложение на основе погоды
const weatherParamsForm = document.querySelector("#weatherParamsForm");
const makeRequestURL = (weatherParams) => {
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
const getWeather = (url) => {
  return fetch(url)
    .then((res) => res.ok && res.json())
    .catch((e) => {
      console.error(e);
    });
};
const getWeatherParams = (elements) => {
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
const clearWeatherData = (data) => {
  console.log(data);
  return {
    date: data.dt,
    main: data.main,
    sunrise: data.sunrise,
    sunset: data.sunset,
    weather: {
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    },
    wind: data.wind,
    clouds: data.clouds,
  };
};
const makeCurrentWeatherApp = (data) => {
  console.log(data);
  //   const clearData = clearWeatherData(data);
  const weatherCardTemplate = document.querySelector(
    "#weatherCardTemplate"
  )?.content;
  if (!weatherCardTemplate) throw new Error("weatherCardTemplate not found");
  const weatherCard = weatherCardTemplate.cloneNode(true);
  console.log(weatherCard);
};
const startApp = async (e) => {
  e.preventDefault();
  const elements = e.target.elements;
  const weatherParams = getWeatherParams(elements);
  const weatherApiURL = makeRequestURL(weatherParams);
  const data = await getWeather(weatherApiURL);
  makeCurrentWeatherApp(clearWeatherData(data));
};
weatherParamsForm.addEventListener("submit", startApp);
