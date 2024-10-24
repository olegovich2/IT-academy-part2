export const movieEventName = 'onMovie';
export const moviesEvent = () => {
	document.dispatchEvent(new CustomEvent(movieEventName));
};
