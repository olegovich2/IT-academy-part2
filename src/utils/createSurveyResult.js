const resultSurvey = document.querySelector('[data-result="resultSurvey"]');
export const createElementsResultSurvey = (object, newNameSurname) => {
	resultSurvey.querySelector('[data-result="name"]').textContent = newNameSurname;
	resultSurvey.querySelector('[data-result="age"]').textContent = object.age;
	resultSurvey.querySelector('[data-result="temperature"]').textContent = object.temperature;
	resultSurvey.querySelector('[data-result="overview"]').textContent = object.anamnesis;
	resultSurvey.querySelector('[data-result="listDiagnosis"]').textContent = object.title.join(' ');
	resultSurvey.querySelector('[data-result="volumeOfLiquid"]').textContent = `Обильное питье ${object.volumeOfLiquid} в сутки`;
};
