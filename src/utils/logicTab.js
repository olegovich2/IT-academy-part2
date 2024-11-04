const allTabs = document.querySelector('[data-nav="allTabs"]');
const tabGeneral = document.querySelector('[data-list="general"]');
const tabRespiratory = document.querySelector('[data-list="respiratory"]');
const tabCardiovascular = document.querySelector('[data-list="cardiovascular"]');
const tabDigestive = document.querySelector('[data-list="digestive"]');
const tabUrinary = document.querySelector('[data-list="urinary"]');
const tabMusculoskeletal = document.querySelector('[data-list="musculoskeletal"]');
const listGeneral = document.querySelector('#general');
const listRespiratory = document.querySelector('#respiratory');
const listCardiovascular = document.querySelector('#cardiovascular');
const listDigestive = document.querySelector('#digestive');
const listUrinary = document.querySelector('#urinary');
const listMusculoskeletal = document.querySelector('#musculoskeletal');
const sections = document.querySelectorAll('section');

allTabs.addEventListener('click', (event) => {
	sections.forEach((element) => {
		if (element.classList.contains('unvisible') && element.id === event.target.dataset.list) element.classList.remove('unvisible');
		else if (!element.classList.contains('unvisible') && element.id === event.target.dataset.list) element.classList.add('unvisible');
		else if (!element.classList.contains('unvisible') && element.id !== event.target.dataset.list) element.classList.add('unvisible');
	});
	if (!listGeneral.classList.contains('unvisible')) tabGeneral.classList.add('active');
	if (listGeneral.classList.contains('unvisible')) tabGeneral.classList.remove('active');

	if (!listRespiratory.classList.contains('unvisible')) tabRespiratory.classList.add('active');
	if (listRespiratory.classList.contains('unvisible')) tabRespiratory.classList.remove('active');

	if (!listCardiovascular.classList.contains('unvisible')) tabCardiovascular.classList.add('active');
	if (listCardiovascular.classList.contains('unvisible')) tabCardiovascular.classList.remove('active');

	if (!listDigestive.classList.contains('unvisible')) tabDigestive.classList.add('active');
	if (listDigestive.classList.contains('unvisible')) tabDigestive.classList.remove('active');

	if (!listUrinary.classList.contains('unvisible')) tabUrinary.classList.add('active');
	if (listUrinary.classList.contains('unvisible')) tabUrinary.classList.remove('active');

	if (!listMusculoskeletal.classList.contains('unvisible')) tabMusculoskeletal.classList.add('active');
	if (listMusculoskeletal.classList.contains('unvisible')) tabMusculoskeletal.classList.remove('active');
});
