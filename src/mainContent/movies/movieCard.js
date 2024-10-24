import { getYearFromMovieReleaseDate } from '../../utils/date';
const defaultPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yOo474niZ8s6hLVpnzF2PKybtKigpCWruw&s';
// import defaultPoster from '../../../public/Images/inception.webp';
const movieCardTemplate = document.querySelector('[data-modal="card"]')?.content;
if (!movieCardTemplate) throw new Error('movieCardTemplate not found');
export const createMovieCard = (movieData) => {
	const movieCard = movieCardTemplate.childNodes[1].cloneNode(true);
	const movieCardImage = movieCard.querySelector('[data-container="image"]');
	movieCardImage.src = movieData.poster_path;
	movieCardImage.title = movieData.title;
	movieCardImage.alt = movieData.title;
	movieCardImage.addEventListener(
		'error',
		() => {
			movieCardImage.alt = 'oops';
			movieCardImage.src = defaultPoster;
		},
		{ once: true },
	);
	movieCard.querySelector('[data-container="title"]').textContent = movieData.title;
	movieCard.querySelector('[data-container="rating"]').textContent = movieData.rating;
	movieCard.querySelector('[data-container="release"]').textContent = getYearFromMovieReleaseDate(movieData.release_date);
	movieCard.querySelector('[data-container="genres"]').textContent = movieData.genres.join(', ');
	movieCard.querySelector('[data-container="runtime"]').textContent = movieData.runtime;
	movieCard.querySelector('[data-container="overview"]').textContent = movieData.overview;

	return movieCard;
};
