import { baseApiUrl, byTitle } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
// import { objectToSearchParams, startLoading } from '../utils';

export const getDiseases = (param) => {
	// startLoading();
	const encoded = encodeURI(param);
	return fetch(`${baseApiUrl}${encoded}${byTitle}`).then(handleRequestResolve()).catch(handleRequestReject());
};
