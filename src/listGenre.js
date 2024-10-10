const listGenre = {
	featureFilm: 'Feature-film',
	shortFilm: 'Short-film',
	action: 'Action',
	adventure: 'Adventure',
	comedy: 'Comedy',
	drama: 'Drama',
	crime: 'Crime',
	horror: 'Horror',
	fantasy: 'Fantasy',
	romance: 'Romance',
	thriller: 'Thriller',
	animation: 'Animation',
	family: 'Family',
	war: 'War',
	documentary: 'Documentary',
	musical: 'Musical',
	biography: 'Biography',
	sciFi: 'Sci-fi',
	western: 'Western',
	postApocalyptic: 'Post-apocalyptic',
};

const objectGenre = {};
export const fieldSelect = document.querySelector("[data-modal='field_select']");
const containerForCheckbox = document.querySelector("[data-container='checkboxesList']");
export const inputGenre = document.querySelector("[data-genre='form_add_input_value']");

const selectGenreFromObject = (object) => {
	for (let key in object) {
		const value = object[key];
		createGenre(value);
	}
};

const createGenre = (value) => {
	const newGenre = document.createElement('div');
	newGenre.className = 'genre_container';
	const input = document.createElement('input');
	input.className = 'custom-checkbox';
	input.type = 'checkbox';
	input.id = value;
	const label = document.createElement('label');
	label.className = 'genre_label';
	label.setAttribute('for', value);
	label.textContent = value;
	newGenre.appendChild(input);
	newGenre.appendChild(label);
	containerForCheckbox.appendChild(newGenre);
};

const genreValueFromFieldSelect = (object) => {
	let value = '';
	for (const key in object) {
		value += object[key] + ' ';
	}
	return value;
};

containerForCheckbox.onclick = function (event) {
	let target = event.target;
	let newKey = '';

	if (target.tagName === 'INPUT' && target.checked) {
		newKey = JSON.stringify(target.id);
		objectGenre[newKey] = target.id;
	}
	if (target.tagName === 'INPUT' && !target.checked) {
		newKey = JSON.stringify(target.id);
		delete objectGenre[newKey];
	}
};

fieldSelect.onclick = function (event) {
	let target = event.target;

	if (target.tagName === 'I') {
		fieldSelect.classList.toggle('unvisible');
		for (let key in objectGenre) {
			delete objectGenre[key];
		}
		const inputTypeCheckbox = document.querySelectorAll('[type="checkbox"]');
		for (let i = 0; i < inputTypeCheckbox.length; i++) {
			inputTypeCheckbox[i].checked = false;
		}
		inputGenre.value = genreValueFromFieldSelect(objectGenre);
	}
	if (target.tagName === 'BUTTON') {
		fieldSelect.classList.toggle('unvisible');
		inputGenre.value = genreValueFromFieldSelect(objectGenre);
	}
};

document.addEventListener('DOMContentLoaded', () => {
	selectGenreFromObject(listGenre);
});
