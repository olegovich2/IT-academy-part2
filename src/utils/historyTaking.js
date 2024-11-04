export const historyTaking = (array) => {
	let overview = '';
	array.forEach((element) => {
		if (element.tagName === 'FIELDSET') {
			if (element.dataset.fieldset === 'nameSurname' || element.dataset.fieldset === 'age' || element.dataset.fieldset === 'temperature');
			else overview += `${element.childNodes[1].textContent}: `;
		}
		if (element.tagName === 'INPUT' && element.checked) {
			let label = document.querySelector(`[for="${element.id}"]`);
			overview += `${label.textContent}. `;
		}
		if (element.tagName === 'INPUT' && element.type === 'text') {
			if (element.id === 'nameSurname' || element.id === 'age' || element.id === 'temperature');
			else overview += `${element.value}. `;
		}
	});
	return overview;
};
