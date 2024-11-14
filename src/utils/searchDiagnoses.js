import { initApp } from '../app';
import { personalDataClone } from '../constants/respiratory';
import { createElementsResultSurvey } from '../utils/createSurveyResult';
import { elementsForSurveys } from '../constants/allConstants';

let diagnosticsList = [];
let treatmentList = [];
export const sendDiagnoses = (param) => {
	for (let i = 0; i < param.length; i++) {
		initApp(param[i]);
	}
};
export const acceptData = (data) => {
	for (let i = 0; i < data[0].diagnostics.length; i++) {
		diagnosticsList.push(data[0].diagnostics[i]);
	}
	for (let i = 0; i < data[0].treatment.length; i++) {
		treatmentList.push(data[0].treatment[i]);
	}
	const diagnosticUniqueArray = Array.from(new Set(diagnosticsList));
	const treatmentUniqyeArray = Array.from(new Set(treatmentList));
	if (data[0].title === personalDataClone.title[personalDataClone.title.length - 1]) {
		diagnosticsList.length = 0;
		treatmentList.length = 0;
	}
	personalDataClone.diagnostic = diagnosticUniqueArray;
	personalDataClone.treatment = treatmentUniqyeArray;
	return arrayInDomElement(personalDataClone);
};
const arrayInDomElement = (object) => {
	createElementsResultSurvey(object, elementsForSurveys.baseSurvey);
	localStorage.setItem('object', JSON.stringify(object));
};
