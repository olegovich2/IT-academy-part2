const [back, forward] = document.querySelectorAll('.paginationArrow');
export const updatePaginationArrows = (currentPage) => {
	try {
		forward.dataset.page = currentPage + 1;
		back.dataset.page = currentPage - 1;
	} catch {
		console.error('pagination arrows not found');
	}
};
