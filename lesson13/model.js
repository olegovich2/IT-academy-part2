export const getWeather = (url) => {
  return fetch(url)
    .then((res) => res.ok && res.json())
    .catch((e) => {
      console.error(e);
    });
};

export const getWeatherIconPath = (iconCode) =>
  "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

export const createWeatherCard = (data, isForecast) => {
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
