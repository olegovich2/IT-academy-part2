import { handleRespiratory } from '../constants/respiratory';
import { resultSurvey, clearResultSurvey } from '../utils/createSurveyResult';
import { buttonForPrint } from '../constants/printResult';
import { callPrint } from './print';
import { getDataForRegistration, getDataForEntrance } from '../api';

const allTabs = document.querySelector('[data-nav="allTabs"]');
const tabGeneral = document.querySelector('[data-list="general"]');
export const tabRespiratory = document.querySelector('[data-list="respiratory"]');
const tabCardiovascular = document.querySelector('[data-list="cardiovascular"]');
const tabDigestive = document.querySelector('[data-list="digestive"]');
const tabUrinary = document.querySelector('[data-list="urinary"]');
const tabMusculoskeletal = document.querySelector('[data-list="musculoskeletal"]');
const listGeneral = document.querySelector('#general');
export const listRespiratory = document.querySelector('#respiratory');
const listCardiovascular = document.querySelector('#cardiovascular');
const listDigestive = document.querySelector('#digestive');
const listUrinary = document.querySelector('#urinary');
const listMusculoskeletal = document.querySelector('#musculoskeletal');
const sections = document.querySelectorAll('section');
export const formFromRespiratoryAnamnesis = document.querySelector('[data-form="respiratory"]');
export const loginButton = document.querySelector('[data-button="login"]');
export const logoutButton = document.querySelector('[data-button="logout"]');
export const windowReg = document.querySelector('[data-temp="windowLogin"]');
export const buttonRegistration = document.querySelector('[data-button="registration"]');
export const formAuth = document.querySelector('[data-form="auth"]');

allTabs.addEventListener('click', (event) => {
	sections.forEach((element) => {
		if (element.classList.contains('unvisible') && element.id === event.target.dataset.list) element.classList.remove('unvisible');
		else if (!element.classList.contains('unvisible') && element.id === event.target.dataset.list) element.classList.add('unvisible');
		else if (!element.classList.contains('unvisible') && element.id !== event.target.dataset.list) element.classList.add('unvisible');
	});
	if (!listGeneral.classList.contains('unvisible')) {
		tabGeneral.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	}
	if (listGeneral.classList.contains('unvisible')) tabGeneral.classList.remove('active');

	if (!listRespiratory.classList.contains('unvisible')) {
		tabRespiratory.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
		formFromRespiratoryAnamnesis.addEventListener('submit', handleRespiratory);
	}
	if (listRespiratory.classList.contains('unvisible')) {
		tabRespiratory.classList.remove('active');
		formFromRespiratoryAnamnesis.removeEventListener('submit', handleRespiratory);
	}

	if (!listCardiovascular.classList.contains('unvisible')) {
		tabCardiovascular.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	}
	if (listCardiovascular.classList.contains('unvisible')) tabCardiovascular.classList.remove('active');

	if (!listDigestive.classList.contains('unvisible')) {
		tabDigestive.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	}
	if (listDigestive.classList.contains('unvisible')) tabDigestive.classList.remove('active');

	if (!listUrinary.classList.contains('unvisible')) {
		tabUrinary.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	}
	if (listUrinary.classList.contains('unvisible')) tabUrinary.classList.remove('active');

	if (!listMusculoskeletal.classList.contains('unvisible')) {
		tabMusculoskeletal.classList.add('active');
		if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	}
	if (listMusculoskeletal.classList.contains('unvisible')) tabMusculoskeletal.classList.remove('active');

	if (resultSurvey.classList.contains('unvisible')) {
		clearResultSurvey();
		buttonForPrint.removeEventListener('click', () => {
			callPrint('#print');
		});
	}
});

loginButton.addEventListener('click', (event) => {
	event.preventDefault();
	windowReg.classList.remove('unvisible');
	if (!windowReg.classList.contains('unvisible')) {
		formAuth.addEventListener('click', handleRegistration);
	}
	// const paramRegistration = {};
	// const login = event.target.elements.login.value;
	// const password = event.target.elements.password.value;
	// paramRegistration.id = login;
	// paramRegistration.password = password;
	// if (event.target.elements) getData(login, paramRegistration);
});
const handleRegistration = (event) => {
	event.preventDefault();
	const paramRegistration = {};
	const login = formAuth.querySelector('#login').value;
	const password = formAuth.querySelector('#password').value;

	console.log(paramRegistration);

	if (event.target.dataset.button === 'registration') {
		if (login.length !== 0 || password.length !== 0) {
			paramRegistration.id = login;
			paramRegistration.password = password;
			paramRegistration.personalList = [];
			getDataForRegistration(login, paramRegistration);
			formAuth.reset();
			windowReg.classList.add('unvisible');
		} else {
			alert('Вы ничего не ввели');
		}
	}
	if (event.target.dataset.button === 'entrance') {
		if (login.length !== 0 || password.length !== 0) {
			paramRegistration.id = login;
			paramRegistration.password = password;
			paramRegistration.personalList = [];
			getDataForEntrance(login, paramRegistration);
			formAuth.reset();
			windowReg.classList.add('unvisible');
		} else {
			alert('Вы ничего не ввели');
		}
	}
};

if (windowReg.classList.contains('unvisible')) {
	formAuth.removeEventListener('click', handleRegistration);
}
