const moviesCounterElement = document.querySelector('#counter');
export const updateMoviesCounter = (count) => {
	moviesCounterElement.textContent = count;
};
