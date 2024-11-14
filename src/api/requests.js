import { baseApiUrl, byTitle, baseURLForDBSurvey, slash } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
import { entranceInPersonalAccount } from '../utils/logicTab';

export const getDiseases = (param) => {
	const encoded = encodeURI(param);
	return fetch(`${baseApiUrl}${encoded}${byTitle}`).then(handleRequestResolve()).catch(handleRequestReject());
};

export const getData = (id) => {
	return fetch(`${baseURLForDBSurvey}${slash}${id}`)
		.then((response) => {
			if (response.ok) return response.json();
			else throw new Error('Получение данных завершилось неудачей');
		})
		.then((result) => {
			localStorage.setItem('test', JSON.stringify(result));
		})
		.catch((error) => {
			console.error(error);
		});
};

export const putData = (id, password, array) => {
	return fetch(`${baseURLForDBSurvey}${slash}${id}`, {
		method: 'PUT',
		body: JSON.stringify({ password: password, personalList: array }),
	})
		.then((response) => {
			if (response.ok) getData(id);
			else throw new Error('Отправка данных осмотра завершилась неудачей');
		})
		.catch((error) => {
			console.error(error);
			alert(error);
		});
};

export const postData = (param) => {
	return fetch(`${baseURLForDBSurvey}`, {
		method: 'POST',
		body: JSON.stringify(param),
	})
		.then(handleRequestResolve())
		.catch(handleRequestReject());
};

export const getDataForRegistration = (id, param) => {
	return fetch(`${baseURLForDBSurvey}${slash}${id}`)
		.then((response) => {
			if (response.ok) alert('Данный логин зарезервирован');
			else throw new Error('Данный логин зарезервирован');
		})
		.catch((error) => {
			console.error(error);
			postData(param);
		});
};

export const getDataForEntrance = (id, param) => {
	return fetch(`${baseURLForDBSurvey}${slash}${id}`)
		.then((response) => {
			if (response.ok) return response.json();
			else throw new Error('Вам необходимо зарегистрироваться');
		})
		.then((result) => {
			if (result.password == param.password) {
				localStorage.setItem('test', JSON.stringify(result));
				entranceInPersonalAccount();
			} else throw new Error('Неверный пароль');
		})
		.catch((error) => {
			console.error(error);
			alert(error);
		});
};
