export const getWeather = (url) => {
  return fetch(url)
    .then((res) => res.ok && res.json())
    .catch((e) => {
      console.error(e);
    });
};
