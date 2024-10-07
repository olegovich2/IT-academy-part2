const listGenre = {
  featureFilm: "Feature film",
  shortFilm: "Short film",
  action: "Action",
  adventure: "Adventure",
  comedy: "Comedy",
  drama: "Drama",
  crime: "Crime",
  horror: "Horror",
  fantasy: "Fantasy",
  romance: "Romance",
  thriller: "Thriller",
  animation: "Animation",
  family: "Family",
  war: "War",
  documentary: "Documentary",
  musical: "Musical",
  biography: "Biography",
  sciFi: "Sci-fi",
  western: "Western",
  postApocalyptic: "Post-apocalyptic",
};

export const newObject = {};

const containerForCheckbox = document.querySelector(
  "[data-container='checkboxesList']"
);

const selectGenreFromObject = (object) => {
  for (let key in object) {
    const value = object[key];
    createGenre(value);
  }
};

const createGenre = (value) => {
  const newGenre = document.createElement("div");
  newGenre.className = "genre_container";
  const input = document.createElement("input");
  input.className = "custom-checkbox";
  input.type = "checkbox";
  input.id = value;
  const label = document.createElement("label");
  label.className = "genre_label";
  label.setAttribute("for", value);
  label.textContent = value;
  newGenre.appendChild(input);
  newGenre.appendChild(label);
  containerForCheckbox.appendChild(newGenre);
};

containerForCheckbox.onclick = function (event) {
  let target = event.target;
  let newKey = "";
  if (target.tagName === "INPUT" && target.checked) {
    newKey = JSON.stringify(target.id);
    newObject[newKey] = target.id;
  }
  if (target.tagName === "INPUT" && !target.checked) {
    newKey = JSON.stringify(target.id);
    delete newObject[newKey];
  }
};

document.addEventListener("DOMContentLoaded", () => {
  selectGenreFromObject(listGenre);
});
