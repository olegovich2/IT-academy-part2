import { getMovies } from './api';
import { createMovieCardList } from './mainContent/index';
import './mainContent/filters/index';
import { updateMoviesCounter } from './mainContent/moviesCounter';
import { endLoading } from './utils';
import { createPagination } from './mainContent/index';
import './mainContent/search/index';
export const initApp = (param) => {
	getMovies(param).then((data) => {
		updateMoviesCounter(data.totalAmount);
		createMovieCardList(data.data);
		console.log(data.limit);

		createPagination(data.limit, data.offset, data.totalAmount);
		endLoading();
	});
};
