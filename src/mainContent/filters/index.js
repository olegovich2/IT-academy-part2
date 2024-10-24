import { moviesEvent } from '../../utils';
import { fieldSelect, objectGenre, clearObjectAndCheckboxes } from '../../listGenre';
import { updateSearchParams } from '../../utils';
import { objectToSearchParams } from '../../utils';
// import {searchParams}

const filtersContainer = document.querySelector('[data-filter="navigation"]');
export const sortParams = [
	{
		sortBy: 'title',
		sortOrder: 'asc',
	},
	{
		sortBy: 'title',
		sortOrder: 'desc',
	},
	{
		sortBy: 'year',
		sortOrder: 'asc',
	},
	{
		sortBy: 'year',
		sortOrder: 'desc',
	},
];

filtersContainer.addEventListener('click', (event) => {
	const element = event.target;
	const sort = document.querySelector('[data-filter="sort"]');
	if (element.dataset.filter === 'filter') {
		fieldSelect.classList.toggle('unvisible');
		fieldSelect.classList.toggle('filter');
	}

	if (element.dataset.filter !== 'sort' && element.dataset.filter !== 'filter') {
		clearObjectAndCheckboxes(objectGenre);
		const filterValue = element.dataset.filter;
		updateSearchParams({ filter: filterValue, ...sortParams[sort.value], offset: 0 });
	}
});
