import { getDiseases } from './api';
import { acceptData } from './utils/searchDiagnoses';
export const initApp = (param) => {
	getDiseases(param).then((data) => {
		acceptData(data.data);
	});
};
