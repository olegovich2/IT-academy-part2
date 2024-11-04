import { callPrint } from '../utils/print';
export const buttonForPrint = document.querySelector('[data-button="print"]');
buttonForPrint.addEventListener('click', () => {
	callPrint('#print');
});
