import { initApp } from '../app';
const resultSurvey = document.querySelector('[data-result="resultSurvey"]');
const diagnosticsList = [];
const treatmentList = [];
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
	return arrayInDomElement(diagnosticUniqueArray, treatmentUniqyeArray);
};
const arrayInDomElement = (diagnosticUniqueArray, treatmentUniqyeArray) => {
	resultSurvey.querySelector('[data-result="diagnostics"]').textContent = diagnosticUniqueArray.join(', ');
	resultSurvey.querySelector('[data-result="treatment"]').textContent = treatmentUniqyeArray.join(', ');
};
