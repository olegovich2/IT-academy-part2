import { sendDiagnoses } from './searchDiagnoses';
import { formatedSymbolInName } from './upperCaseFirstSymbol';
import { createElementsResultSurvey } from './createSurveyResult';
export const metaData = (object) => {
	const newNameSurname = formatedSymbolInName(object.nameSurname);
	sendDiagnoses(object.title);
	createElementsResultSurvey(object, newNameSurname);
};
