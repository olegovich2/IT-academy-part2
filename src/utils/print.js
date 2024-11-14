import { clearResultSurvey } from './createSurveyResult';
import { putData } from '../api';
import { elementsForSurveys } from '../constants/allConstants';
import { resultSurvey } from './logicTab';
import { exportHTML } from './personalAccount';

export const buttonForPrint = document.querySelector('[data-button="print"]');
export const buttonForSaveSurvey = document.querySelector('[data-button="saveData"]');
export const buttonForSaveWordSurvey = document.querySelector('[data-button="saveAs"]');
export const buttonForCloseSurvey = document.querySelector('[data-button="closeResultSurvey"]');

export const callPrint = (id) => {
	const prtContent = document.querySelector(id);
	const WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
	WinPrint.document.write('');
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.write('');
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();
};

export const saveSurveyToDB = (event) => {
	event.preventDefault();
	console.log('+++');

	if (!localStorage.getItem('test')) alert('Вам необходимо войти в личный кабинет');
	if (!!localStorage.getItem('test')) {
		const objectFromLocalStorage = JSON.parse(localStorage.getItem('test'));
		const arraySurvey = objectFromLocalStorage.personalList;
		arraySurvey.push(JSON.parse(localStorage.getItem('object')));
		putData(objectFromLocalStorage.id, objectFromLocalStorage.password, arraySurvey);
		alert('Ваши данные успешно сохранены и отобразятся в личном кабинете');
	}
};

buttonForPrint.addEventListener('click', () => {
	callPrint('#print');
});

buttonForSaveSurvey.addEventListener('click', saveSurveyToDB);

buttonForSaveWordSurvey.addEventListener('click', (event) => {
	exportHTML('#print');
});

buttonForCloseSurvey.addEventListener('click', (event) => {
	event.preventDefault();
	if (!resultSurvey.classList.contains('unvisible')) resultSurvey.classList.add('unvisible');
	clearResultSurvey(elementsForSurveys.baseSurvey);
	localStorage.removeItem('object');
});
