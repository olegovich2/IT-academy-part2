export const divForContent = document.querySelector('[data-container="div_for_card"]');
const header = document.querySelector('header');
const headerForCard = document.querySelector('[data-modal="header_for_card"]');
const cardMovieTemplate = document.querySelector('[data-modal="card_in_header"]')?.content;

const headerToggle = () => {
	header.classList.toggle('unvisible');
};
const deleteChild = () => {
	const firstChild = headerForCard.firstChild;
	if (headerForCard.children.length > 0) headerForCard.removeChild(firstChild);
};
const openCard = () => {
	deleteChild();
	createCardInHeader();
};
const createCardInHeader = () => {
	if (!cardMovieTemplate) throw new Error('cardMovieTemplate not found');
	const overviewCard = cardMovieTemplate.childNodes[1].cloneNode(true);
	headerForCard.appendChild(overviewCard);
	controllerCardInHeader();
};
divForContent.onclick = function (event) {
	const target = event.target;
	const parent = target.parentNode;
	if (headerForCard.children.length === 0) headerToggle();
	if (parent.dataset.container === 'card_movie') openCard();
	window.scrollTo(0, 0);
};
const controllerCardInHeader = () => {
	const componentsCard = document.querySelector('[data-container="components_card"]');
	componentsCard.addEventListener('click', (event) => {
		const target = event.target;
		console.log(target);
		if (target.tagName === 'I') {
			headerToggle();
			deleteChild();
		}
	});
};
