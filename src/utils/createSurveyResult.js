export const resultSurvey = document.querySelector('[data-result="resultSurvey"]');
export const createElementsResultSurvey = (object) => {
	resultSurvey.querySelector('[data-result="dateAndTime"]').textContent = object.date;
	resultSurvey.querySelector('[data-result="name"]').textContent = object.nameSurname;
	resultSurvey.querySelector('[data-result="age"]').textContent = object.age;
	resultSurvey.querySelector('[data-result="temperature"]').textContent = object.temperature;
	resultSurvey.querySelector('[data-result="overview"]').textContent = object.anamnesis;
	resultSurvey.querySelector('[data-result="listDiagnosis"]').textContent = object.title.join(' ');
	resultSurvey.querySelector('[data-result="diagnostics"]').textContent = object.diagnostic.join(', ');
	resultSurvey.querySelector('[data-result="treatment"]').textContent = object.treatment.join(', ');
	resultSurvey.querySelector('[data-result="volumeOfLiquid"]').textContent = object.otherGuidelines.join(' ');
};

export const clearResultSurvey = () => {
	resultSurvey.querySelector('[data-result="dateAndTime"]').textContent = '';
	resultSurvey.querySelector('[data-result="name"]').textContent = '';
	resultSurvey.querySelector('[data-result="age"]').textContent = '';
	resultSurvey.querySelector('[data-result="temperature"]').textContent = '';
	resultSurvey.querySelector('[data-result="overview"]').textContent = '';
	resultSurvey.querySelector('[data-result="listDiagnosis"]').textContent = '';
	resultSurvey.querySelector('[data-result="diagnostics"]').textContent = '';
	resultSurvey.querySelector('[data-result="treatment"]').textContent = '';
	resultSurvey.querySelector('[data-result="volumeOfLiquid"]').textContent = '';
};
