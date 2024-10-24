import { moviesEvent } from './events';
export const objectToSearchParams = (params) => {
	let searchString = '';
	Object.entries(params).forEach(([key, value]) => {
		if (value) {
			const separator = searchString.length ? '&' : '?';
			searchString += `${separator}${key}=${value}`;
		}
	});

	return searchString;
};

export const searchParamsToObj = (searchParams) => {
	return Object.fromEntries(new URLSearchParams(searchParams));
};
export const getCurrentSearchParamsObject = () => searchParamsToObj(window.location.search);
export const updateSearchParams = (newParams) => {
	window.history.pushState(
		undefined,
		'',
		window.location.origin + objectToSearchParams({ ...getCurrentSearchParamsObject(), ...newParams }),
	);
	moviesEvent();
};
