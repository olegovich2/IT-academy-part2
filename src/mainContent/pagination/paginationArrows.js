export const createPaginationArrows = (container) => {
	const backArrow = document.createElement('button');
	backArrow.classList.add('paginationArrow', 'back');
	backArrow.textContent = '<';
	const forwardArrow = document.createElement('button');
	forwardArrow.classList.add('paginationArrow', 'forward');
	forwardArrow.textContent = '>';
	container.prepend(backArrow);
	container.append(forwardArrow);
};
