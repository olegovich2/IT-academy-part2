import { baseApiUrl, defaultSearchParams } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
import { objectToSearchParams, startLoading } from '../utils';

export const getMovies = (params) => {
	startLoading();
	const searchParams = objectToSearchParams({ ...defaultSearchParams, ...params });

	return fetch(`${baseApiUrl}${searchParams}`).then(handleRequestResolve()).catch(handleRequestReject());
};
export const deleteMovie = (id) => {
	startLoading();
	return fetch(`${baseApiUrl}${id}`, { method: 'Delete' }).then(handleRequestResolve()).catch(handleRequestReject());
};
export const updateMovieById = (data) => {
	startLoading();
	return fetch(`${baseApiUrl}`, { method: 'PUT', body: JSON.stringify(data), headers: 'Content-Type: application/json' })
		.then(handleRequestResolve())
		.catch(handleRequestReject());
};
