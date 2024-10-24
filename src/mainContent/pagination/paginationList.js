import { createPaginationItem } from './paginationItem';
import { updateSearchParams, getCurrentSearchParamsObject } from '../../utils';
import { defaultSearchParams } from '../../api/constants';
import { createPaginationArrows } from './paginationArrows';

const paginationContainerElement = document.querySelector('#pagination-container');
const paginationElement = document.querySelector('#pagination');

const paginationLimitDefault = 4;

export const createPagination = (limit, offset, total) => {
	const { offset: currentOffset } = getCurrentSearchParamsObject();
	const currentPage = !currentOffset ? 0 : currentOffset / defaultSearchParams.limit;
	paginationContainerElement.innerHTML = '';
	createPaginationArrows(paginationElement);
	const startPage = offset ? offset / limit : offset;
	const paginationNumbers = Array.from(Array(Math.ceil(total / limit)).keys());
	console.log(paginationNumbers);

	const paginationLimit = paginationNumbers.includes(startPage + paginationLimitDefault) ? startPage + paginationLimitDefault : 1;

	const paginationButtons = paginationNumbers
		.slice(startPage, paginationLimit + 1)
		.map((number) => createPaginationItem(number + 1, number === currentPage));

	paginationContainerElement.append(...paginationButtons);
};
paginationElement?.addEventListener('click', (event) => {
	const pagination = event.target.dataset.page;
	if (!pagination) return;
	updateSearchParams({
		offset: pagination * defaultSearchParams.limit,
	});
});
