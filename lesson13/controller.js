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
