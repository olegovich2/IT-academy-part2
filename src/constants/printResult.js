import { callPrint, buttonForPrint } from '../utils/print';

buttonForPrint.addEventListener('click', () => {
	callPrint('#print');
});
