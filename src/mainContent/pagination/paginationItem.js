export const createPaginationItem = (number, isActive) => {
	const paginationItem = document.createElement('button');
	paginationItem.disabled = isActive;
	paginationItem.attributes.type = 'button';
	paginationItem.textContent = number;
	paginationItem.dataset.page = number;
	return paginationItem;
};
