import { handleRespiratory } from '../constants/respiratory';
import { clearResultSurvey } from '../utils/createSurveyResult';
import { callPrint, buttonForPrint, buttonForSaveWordSurvey, buttonForSaveSurvey, buttonForCloseSurvey, saveSurveyToDB } from './print';
import { getDataForRegistration, getDataForEntrance } from '../api';
import { handlePersonalAccountWindow, listFromLocalStorage } from './personalAccount';
import { elementsForSurveys } from '../constants/allConstants';

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
export const containerForButtonsInHeader = document.querySelector('[data-container="buttons"]');
export const loginButton = document.querySelector('[data-button="login"]');
export const personalAccount = document.querySelector('[data-button="personalAccount"]');
export const logoutButton = document.querySelector('[data-button="logout"]');
export const windowReg = document.querySelector('[data-temp="windowLogin"]');
export const buttonRegistration = document.querySelector('[data-button="registration"]');
export const formAuth = document.querySelector('[data-form="auth"]');
export const personalAccountWindow = document.querySelector('[data-temp="personalAccountWindow"]');
export const resultSurvey = document.querySelector(elementsForSurveys.baseSurvey.elementPath);

export const entranceInPersonalAccount = () => {
	personalAccount.classList.remove('unvisible');
	logoutButton.classList.remove('unvisible');
	loginButton.classList.add('unvisible');
};

export const exitFromPersonalAccount = () => {
	personalAccount.classList.add('unvisible');
	logoutButton.classList.add('unvisible');
	loginButton.classList.remove('unvisible');
};

containerForButtonsInHeader.addEventListener('click', (event) => {
	event.preventDefault();

	if (event.target.dataset.button === 'login' || event.target.classList.contains('fa-user')) {
		windowReg.classList.remove('unvisible');
		if (!windowReg.classList.contains('unvisible')) {
			formAuth.addEventListener('click', handleRegistration);
		}
	}
	if (event.target.dataset.button === 'personalAccount' || event.target.classList.contains('fa-receipt')) {
		personalAccountWindow.classList.remove('unvisible');
		personalAccountWindow.addEventListener('click', handlePersonalAccountWindow);
		listFromLocalStorage();
	}
	if (event.target.dataset.button === 'logout' || event.target.classList.contains('fa-xmark')) {
		localStorage.removeItem('test');
		exitFromPersonalAccount();
	}
});

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
		clearResultSurvey(elementsForSurveys.baseSurvey);
	}
});
const handleRegistration = (event) => {
	event.preventDefault();
	const paramRegistration = {};
	const login = formAuth.querySelector('#login').value;
	const password = formAuth.querySelector('#password').value;
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
	if (event.target.dataset.button === 'close') {
		formAuth.reset();
		windowReg.classList.add('unvisible');
	}
};

if (windowReg.classList.contains('unvisible')) {
	formAuth.removeEventListener('click', handleRegistration);
}

if (resultSurvey.classList.contains('unvisible')) localStorage.removeItem('object');
if (!!localStorage.getItem('test')) entranceInPersonalAccount();
