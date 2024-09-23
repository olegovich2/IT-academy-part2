import { getWeather } from "./model.js";
import { makeRequestURL } from "./controller.js";
// делаем приложение на основе погоды
let tempUnitSymbol;
let windMeasureUnits;
let tempLanguage;
const weatherDictionary = {
  ru: {
    temperature: "Температура",
    feelsLike: "Ощущается как",
    wind: "Ветер",
    gust: "Порывы до",
    rain1h: "Дождь в ближайший час",
    rain3h: "Дождь в ближайшие 3 часа",
    noRain: "Без осадков",
  },
  en: {
    temperature: "Temperature",
    feelsLike: "Feels like",
    wind: "Wind",
    gust: "Gust into",
    rain1h: "Rain 1 hour",
    rain3h: "Rain 3 hour",
    noRain: "No rain",
  },
};
const weatherParamsForm = document.querySelector("#weatherParamsForm");

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
const prepareWeatherData = (data) => {
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
//пример выполнения
// const prepareForecastData = (data) => {
//   const arrayWeather = [];
//   data.forEach((element) => {
//     let elementOfArray = {
//       date: new Date(element.dt * 1000),
//       main: {
//         temp: Math.round(element.main.temp) + tempUnitSymbol,
//         feelsLike: Math.round(element.main.feels_like) + tempUnitSymbol,
//       },
//       sunrise: element.sunrise,
//       sunset: element.sunset,
//       weather: {
//         description: element.weather[0].description,
//         icon: element.weather[0].icon,
//       },
//       wind: element.wind,
//       clouds: element.clouds,
//       rain: element.rain,
//       snow: element.snow,
//     };
//     arrayWeather.push(elementOfArray);
//   });
//   return arrayWeather;
// };
const prepareForecastData = (data) => {
  return data.list.map((weatherItem) => prepareWeatherData(weatherItem));
};
const getWeatherIconPath = (iconCode) =>
  "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

const createWeatherCard = (data, isForecast) => {
  const weatherCardTemplate = document.querySelector(
    "#weatherCardTemplate"
  )?.content;
  if (!weatherCardTemplate) throw new Error("weatherCardTemplate not found");
  const weatherCard = weatherCardTemplate.cloneNode(true);
  const currentWeatherIcon = weatherCard.querySelector(".card-img-top");
  const localeOptions = {
    month: "long",
    weekday: "long",
    day: "numeric",
  };
  if (isForecast === true) {
    localeOptions.hour = "numeric";
    localeOptions.minute = "numeric";
  }
  const formattedDate = data.date.toLocaleString(tempLanguage, localeOptions);
  weatherCard.querySelector(".card-description").textContent = formattedDate;
  currentWeatherIcon.src = getWeatherIconPath(data.weather.icon);
  currentWeatherIcon.alt = data.weather.description;
  weatherCard.querySelector(".card-date").textContent =
    data.weather.description;
  weatherCard.querySelector(
    ".card-temperature"
  ).textContent = `${weatherDictionary[tempLanguage].temperature}  ${data.main.temp}`;
  weatherCard.querySelector(
    ".card-feels-like"
  ).textContent = `${weatherDictionary[tempLanguage].feelsLike} ${data.main.feelsLike}`;
  weatherCard.querySelector(
    ".card-wind"
  ).textContent = `${weatherDictionary[tempLanguage].wind} ${data.wind.speed} ${windMeasureUnits}. 
  ${weatherDictionary[tempLanguage].gust} ${data.wind.gust} ${windMeasureUnits}`;
  const rainContainer = weatherCard.querySelector(".card-rain");
  if (data.rain) {
    if (data.rain["1h"]) {
      rainContainer.textContent = `${weatherDictionary[tempLanguage].rain1h} ${data.rain["1h"]} mm`;
    } else {
      rainContainer.textContent = `${weatherDictionary[tempLanguage].rain1h} ${data.rain["3h"]} mm`;
    }
  } else {
    rainContainer.textContent = `${weatherDictionary[tempLanguage].noRain}`;
  }
  return weatherCard;
};

const makeForecastApp = (data) => {
  const weatherAppRoot = document.querySelector("#weatherAppRoot");
  weatherAppRoot.innerHTML = "";
  const weatherCards = data.map((dataItem) =>
    createWeatherCard(dataItem, true)
  );
  weatherAppRoot.append(...weatherCards);
};
const makeCurrentWeatherApp = (data) => {
  const weatherAppRoot = document.querySelector("#weatherAppRoot");
  weatherAppRoot.innerHTML = "";
  const weatherCard = createWeatherCard(data);
  weatherAppRoot.append(weatherCard);
};

const weatherParamsStorageKey = "weatherParams";
const saveParamsToStore = (params) => {
  console.log(params);
  window.localStorage.setItem(weatherParamsStorageKey, JSON.stringify(params));
};

const getParamsFromStorage = () =>
  JSON.parse(window.localStorage.getItem(weatherParamsStorageKey));

const setUpLocalWeatherParams = (weatherParams, isSetupLocalStorage) => {
  if (weatherParams.units === "imperial") {
    tempUnitSymbol = "\u00B0F";
    windMeasureUnits = "mph";
  } else {
    tempUnitSymbol = "\u00B0C";
    windMeasureUnits = "м/с";
  }
  tempLanguage = weatherParams.lang;

  if (isSetupLocalStorage) saveParamsToStore(weatherParams);
};
// const startApp = async (e) => {
//   e.preventDefault();
//   const elements = e.target.elements;
//   const weatherParams = getWeatherParams(elements);
//   setUpLocalWeatherParams(weatherParams);
//   const weatherApiURL = makeRequestURL(weatherParams);
//   const data = await getWeather(weatherApiURL);
//   if (weatherParams.isForecast) {
//     makeForecastApp(prepareForecastData(data));
//   } else {
//     makeCurrentWeatherApp(prepareWeatherData(data));
//   }
// };
// weatherParamsForm.addEventListener("submit", startApp);

const startApp = async (e) => {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const weatherParams = e.isTrusted
    ? getWeatherParams(elements)
    : getParamsFromStorage();
  setUpLocalWeatherParams(weatherParams, e.isTrusted);

  if (!e.isTrusted) {
    Object.entries(weatherParams).forEach(
      ([name, value]) => (e.currentTarget[name].value = value)
    );
  }
  const weatherApiURL = makeRequestURL(weatherParams);
  const data = await getWeather(weatherApiURL);

  if (weatherParams.isForecast) makeForecastApp(prepareForecastData(data));
  else makeCurrentWeatherApp(prepareWeatherData(data));
};
weatherParamsForm.addEventListener("change", startApp);

weatherParamsForm.dispatchEvent(new Event("change"));
