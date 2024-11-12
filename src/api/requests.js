import { baseApiUrl, byTitle } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
import { personalDataClone } from '../constants/respiratory';
import { entranceInPersonalAccount } from '../utils/logicTab';

export const getDiseases = (param) => {
	const encoded = encodeURI(param);
	return fetch(`${baseApiUrl}${encoded}${byTitle}`).then(handleRequestResolve()).catch(handleRequestReject());
};

export const putData = (id, password, personalList) => {
	return fetch(`http://localhost:3000/posts/${id}`, {
		method: 'PUT',
		body: JSON.stringify({ password: password, personalList: [personalList] }),
	});
};
// putData(375445555555, 11111111, { 2: '2' });

// export const deleteData = () => {
// 	return fetch('http://localhost:3000/posts/01ca', { method: 'DELETE' });
// };
export const postData = (param) => {
	return fetch('http://localhost:3000/posts', {
		method: 'POST',
		body: JSON.stringify(param),
	})
		.then(handleRequestResolve())
		.catch(handleRequestReject());
};
export const getDataForRegistration = (id, param) => {
	return fetch(`http://localhost:3000/posts/${id}`)
		.then((response) => {
			if (response.ok) alert('Данный логин зарезервирован');
			else throw new Error();
		})
		.catch((error) => {
			postData(param);
		});
};
export const getDataForEntrance = (id, param) => {
	return fetch(`http://localhost:3000/posts/${id}`)
		.then((response) => {
			if (response.ok) return response.json();
			else throw new Error('Вам необходимо зарегистрироваться');
		})
		.then((result) => {
			if (result.password == param.password) {
				console.log(result);
				localStorage.setItem('test', JSON.stringify(result));
				entranceInPersonalAccount();
			} else throw new Error('Неверный пароль');
		})
		.catch((error) => {
			console.error(error);
			alert(error);
		});
};
