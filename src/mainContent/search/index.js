import { updateSearchParams } from '../../utils';

const searchForm = document.querySelector('#navbar_search');
searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const search = event.target.elements.search?.value;

	updateSearchParams({
		search,
		searchBy: 'title',
	});
	searchForm.reset();
});
