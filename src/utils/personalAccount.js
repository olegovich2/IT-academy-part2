import { personalAccountWindow } from './logicTab';
import { putData } from '../api';
import { elementsForSurveys } from '../constants/allConstants';
import { createElementsResultSurvey, clearResultSurvey } from './createSurveyResult';
import { callPrint } from './print';

export const closeButtonFromPersonalAccount = document.querySelector('[data-account="close"]');
export const divForPieces = document.querySelector('[data-container="allSurveyFromDB"]');
export const templateSurveyWithDate = document.querySelector('[data-template="allSurveyFromDB"]');
export const survey = document.querySelector(elementsForSurveys.surveyFromAccount.elementPath);
export const handlePersonalAccountWindow = (event) => {
	if (event.target.dataset.account === 'close') {
		personalAccountWindow.classList.add('unvisible');
		divForPieces.textContent = '';
		if (!survey.classList.contains('unvisible')) {
			clearResultSurvey(elementsForSurveys.surveyFromAccount);
			survey.classList.add('unvisible');
		}
		personalAccountWindow.removeEventListener('click', handlePersonalAccountWindow);
	}
	if (event.target.dataset.container === 'deleteButton') {
		if (!survey.classList.contains('unvisible')) {
			survey.classList.add('unvisible');
			clearResultSurvey(elementsForSurveys.surveyFromAccount);
		}
		divForPieces.textContent = '';
		deleteElementArray(event.target.parentElement.id);
		setTimeout(listFromLocalStorage, 1000);
	}
	if (event.target.dataset.container === 'lookButton') {
		if (survey.classList.contains('unvisible')) survey.classList.remove('unvisible');
		clearResultSurvey(elementsForSurveys.surveyFromAccount);
		createElementsResultSurvey(
			JSON.parse(localStorage.getItem('test')).personalList[event.target.parentElement.id],
			elementsForSurveys.surveyFromAccount,
		);
	}
	if (event.target.dataset.account === 'print') {
		callPrint('#printFromAccount');
	}
	if (event.target.dataset.account === 'closeResultSurvey') {
		if (!survey.classList.contains('unvisible')) survey.classList.add('unvisible');
		clearResultSurvey(elementsForSurveys.surveyFromAccount);
	}
	if (event.target.dataset.account === 'saveAs') {
		exportHTML('#printFromAccount');
	}
};

export const listFromLocalStorage = () => {
	const object = JSON.parse(localStorage.getItem('test'));
	for (let i = object.personalList.length - 1; i >= 0; i--) {
		pickingUpPieces(object.personalList[i], i);
	}
};

export const pickingUpPieces = (object, id) => {
	const divContainer = templateSurveyWithDate.content.children[0].cloneNode(true);
	divContainer.id = id;
	divContainer.querySelector('[data-container="date"]').textContent = object.date;
	divForPieces.appendChild(divContainer);
};

export const deleteElementArray = (id) => {
	const object = JSON.parse(localStorage.getItem('test'));
	object.personalList.splice(id, 1);
	putData(object.id, object.password, object.personalList);
};

export const exportHTML = (id) => {
	let date;
	const header =
		"<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
		"xmlns:w='urn:schemas-microsoft-com:office:word' " +
		"xmlns='http://www.w3.org/TR/REC-html40'>" +
		"<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
	const footer = '</body></html>';
	const docSave = document.querySelector(id);
	const sourceHTML = header + docSave.innerHTML + footer;
	if (id === '#printFromAccount') {
		date = docSave.querySelector(elementsForSurveys.surveyFromAccount.date).textContent.split(', ').join('_');
	}
	if (id === '#print') {
		date = docSave.querySelector(elementsForSurveys.baseSurvey.date).textContent.split(', ').join('_');
	}
	const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
	const fileDownload = document.createElement('a');
	document.body.appendChild(fileDownload);
	fileDownload.href = source;
	fileDownload.download = `Результат_опроса_от_${date}.doc`;
	fileDownload.click();
	document.body.removeChild(fileDownload);
};
