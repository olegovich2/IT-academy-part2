export const formatedSymbolInName = (nameSurname) => {
	if (nameSurname.length > 0) {
		const arrayFromNameSurname = nameSurname.toLowerCase().split(' ');
		const newNameSurname = [];
		for (let i = 0; i < arrayFromNameSurname.length; i++) {
			const newArray = arrayFromNameSurname[i].split('');
			newArray[0] = newArray[0].toUpperCase();
			const newArray1 = newArray.join('');
			newNameSurname.push(newArray1);
		}
		return newNameSurname.join(' ');
	} else return '';
};
