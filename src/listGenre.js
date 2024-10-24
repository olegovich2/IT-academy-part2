import { moviesEvent } from './utils';
import { sortParams } from '../src/mainContent/filters/index';
import { objectToSearchParams } from './utils';
import { updateSearchParams } from './utils';
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

export const objectGenre = {};
export const fieldSelect = document.querySelector("[data-modal='field_select']");
export const containerForCheckbox = document.querySelector("[data-container='checkboxesList']");
export const inputGenre = document.querySelector("[data-genre='form_add_input_value']");
const filterGenre = document.querySelector('[data-filter="filter"]');

export const selectGenreFromObject = (object) => {
	for (let key in object) {
		const value = object[key];
		createGenre(value);
	}
};

export const createGenre = (value) => {
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

const genreValueFieldSelect = (object) => {
	let valueForFetch = '';
	const array = Object.values(object);
	for (let i = 0; i < array.length; i++) {
		let separator = '%2C%20';
		if (array.length - 1 === i) {
			separator = '';
			valueForFetch += `${array[i]}${separator}`;
		} else {
			valueForFetch += `${array[i]}${separator}`;
		}
	}
	return valueForFetch;
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
export const clearObjectAndCheckboxes = (object) => {
	for (let key in object) {
		delete object[key];
	}
	const inputTypeCheckbox = document.querySelectorAll('[type="checkbox"]');
	for (let i = 0; i < inputTypeCheckbox.length; i++) {
		inputTypeCheckbox[i].checked = false;
	}
};
fieldSelect.onclick = function (event) {
	let target = event.target;
	const sort = document.querySelector('[data-filter="sort"]');
	if (target.tagName === 'I') {
		fieldSelect.classList.toggle('unvisible');
		clearObjectAndCheckboxes(objectGenre);
		if (fieldSelect.classList[0] !== 'filter') {
			inputGenre.value = genreValueFromFieldSelect(objectGenre);
		}
		if (fieldSelect.classList[0] === 'filter') {
			filterGenre.value = genreValueFieldSelect(objectGenre);
			const searchOption = { filter: filterGenre.value, ...sortParams[sort.value] };
			const searchParams = objectToSearchParams(searchOption);
			window.history.pushState(undefined, '', window.location.origin + searchParams);
			moviesEvent();
			fieldSelect.classList.toggle('filter');
		}
	}
	if (target.tagName === 'BUTTON') {
		fieldSelect.classList.toggle('unvisible');
		if (fieldSelect.classList[0] !== 'filter') {
			inputGenre.value = genreValueFromFieldSelect(objectGenre);
		}
		if (fieldSelect.classList[0] === 'filter') {
			filterGenre.value = genreValueFieldSelect(objectGenre);
			updateSearchParams({ filter: filterGenre.value, ...sortParams[sort.value], offset: 0 });
			fieldSelect.classList.toggle('filter');
		}
	}
};

document.addEventListener('DOMContentLoaded', () => {
	selectGenreFromObject(listGenre);
});
