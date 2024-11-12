export const buttonForPrint = document.querySelector('[data-button="print"]');
export const buttonForSaveSurvey = document.querySelector('[data-button="saveData"]');

export const callPrint = (id) => {
	const prtContent = document.querySelector(id);
	const WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
	WinPrint.document.write('');
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.write('');
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();
};

buttonForSaveSurvey.addEventListener('click', (event) => {
	event.preventDefault();
	if (!localStorage.getItem('test')) alert('Вам необходимо войти в личный кабинет');
});
