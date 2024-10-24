import { baseApiUrl, defaultSearchParams } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
import { objectToSearchParams, startLoading } from '../utils';

export const getMovies = (params) => {
	startLoading();
	const searchParams = objectToSearchParams({ ...defaultSearchParams, ...params });

	return fetch(`${baseApiUrl}${searchParams}`).then(handleRequestResolve()).catch(handleRequestReject());
};
