import { createMovieCard } from './movieCard';

const cardContainer = document.querySelector('[data-container="div_for_card"]');
export const createMovieCardList = (moviesList) => {
	cardContainer.innerHTML = '';
	const moviesCards = moviesList.map((movie) => createMovieCard(movie));
	cardContainer.append(...moviesCards);
};
