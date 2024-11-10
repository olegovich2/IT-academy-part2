import { baseApiUrl, byTitle } from './constants';
import { handleRequestReject, handleRequestResolve } from './utils';
import { personalDataClone } from '../constants/respiratory';

export const getDiseases = (param) => {
	const encoded = encodeURI(param);
	return fetch(`${baseApiUrl}${encoded}${byTitle}`).then(handleRequestResolve()).catch(handleRequestReject());
};

// export const putData = () => {
// 	return fetch('http://localhost:3000/posts/375445518423', {
// 		method: 'PUT',
// 		body: JSON.stringify({ personalList: [personalDataClone] }),
// 	});
// };
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
			else throw new Error('response not found');
		})
		.then((result) => {
			if (result.password === param.password) console.log(result);
			else throw new Error('wrong password');
		})
		.catch((error) => {
			console.log(error);
		});
};
