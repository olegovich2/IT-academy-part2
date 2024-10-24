import './openCardInHeader';
import './customCheckbox';
import './lesson13-HW';
import './cardInHeader';
import './formAddMovie';
import { initApp } from './app';
import { movieEventName, searchParamsToObj } from './utils';
initApp(searchParamsToObj(window.location.search));
document.addEventListener(movieEventName, () => {
	const params = searchParamsToObj(window.location.search);
	initApp(params);
});
// import './api/index';
// import './mainContent/movies/movieCard';
