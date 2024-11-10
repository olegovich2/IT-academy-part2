import { sendDiagnoses } from './searchDiagnoses';
import { formatedSymbolInName } from './upperCaseFirstSymbol';
// import { createElementsResultSurvey } from './createSurveyResult';
export const metaData = (object) => {
	const newNameSurname = formatedSymbolInName(object.nameSurname);
	object.nameSurname = newNameSurname;
	sendDiagnoses(object.title);
};
