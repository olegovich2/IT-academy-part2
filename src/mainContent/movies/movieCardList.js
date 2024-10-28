import { createMovieCard } from './movieCard';

const cardContainer = document.querySelector('[data-container="div_for_card"]');
const buttonOptions = document.querySelector('[data-modal="buttons"]');
const modalDeleteMovie = document.querySelector('[data-modal="buttons"]');

export const createMovieCardList = (moviesList) => {
	cardContainer.innerHTML = '';
	const moviesCards = moviesList.map((movie) => createMovieCard(movie));
	cardContainer.append(...moviesCards);
};
cardContainer?.addEventListener('click', (event) => {
	const isCardOptions = event.target;

	if (isCardOptions.dataset.button === 'option') {
		buttonOptions.classList.toggle('unvisible');
	}
});
buttonOptions.addEventListener('click', (event) => {
	if (event.target.tagName === 'I') buttonOptions.classList.toggle('unvisible');
	if (event.target.dataset.button === 'delete') {
	}
	if (event.target.dataset.button === 'edit') {
	}
});
