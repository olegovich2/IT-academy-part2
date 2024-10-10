import { fieldSelect } from './listGenre.js';

const fullscreenArea = document.querySelector("[data-container='fullscreen']");
const fieldAddMovie = document.querySelector("[data-modal='field_add_movie']");

fullscreenArea.onclick = function (event) {
	let target = event.target;
	if (target.dataset.button === 'button_add') fieldAddMovie.classList.toggle('unvisible');
};

fieldAddMovie.onclick = function (event) {
	let target = event.target;
	if (target.tagName === 'I') fieldAddMovie.classList.toggle('unvisible');
	if (target.dataset.genre === 'form_add_button') fieldSelect.classList.toggle('unvisible');
};
