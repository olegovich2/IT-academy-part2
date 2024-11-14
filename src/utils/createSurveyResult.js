export const createElementsResultSurvey = (object, path) => {
	const resultSurvey = document.querySelector(path.elementPath);
	resultSurvey.querySelector(path.date).textContent = object.date;
	resultSurvey.querySelector(path.name).textContent = object.nameSurname;
	resultSurvey.querySelector(path.age).textContent = object.age;
	resultSurvey.querySelector(path.temperature).textContent = object.temperature;
	resultSurvey.querySelector(path.overview).textContent = object.anamnesis;
	resultSurvey.querySelector(path.listDiagnosis).textContent = object.title.join(' ');
	resultSurvey.querySelector(path.diagnostics).textContent = object.diagnostic.join(', ');
	resultSurvey.querySelector(path.treatment).textContent = object.treatment.join(', ');
	resultSurvey.querySelector(path.otherGuidelines).textContent = object.otherGuidelines.join(' ');
};

export const clearResultSurvey = (path) => {
	const resultSurvey = document.querySelector(path.elementPath);
	resultSurvey.querySelector(path.date).textContent = '';
	resultSurvey.querySelector(path.name).textContent = '';
	resultSurvey.querySelector(path.age).textContent = '';
	resultSurvey.querySelector(path.temperature).textContent = '';
	resultSurvey.querySelector(path.overview).textContent = '';
	resultSurvey.querySelector(path.listDiagnosis).textContent = '';
	resultSurvey.querySelector(path.diagnostics).textContent = '';
	resultSurvey.querySelector(path.treatment).textContent = '';
	resultSurvey.querySelector(path.otherGuidelines).textContent = '';
};
