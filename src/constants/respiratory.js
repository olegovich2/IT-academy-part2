const formFromRespiratoryAnamnesis = document.querySelector('[data-form="respiratory"]');

formFromRespiratoryAnamnesis.addEventListener('submit', (event) => {
	event.preventDefault();
	const age = Number(event.target.elements.age.value);
	const temperature = Number(event.target.elements.temperature.value);
	const soreThroat = Number(event.target.elements.soreThroat.value);
	const plaquesTonsils = Number(event.target.elements.plaquesTonsils.value);
	const runnyNose = Number(event.target.elements.runnyNose.value);
	const cough = Number(event.target.elements.cough.value);
	const dyspnoea = Number(event.target.elements.dyspnoea.value);
	const sputum = Number(event.target.elements.sputum.value);
	const hemoptysis = Number(event.target.elements.hemoptysis.value);
	const chestPainBreathing = Number(event.target.elements.chestPainBreathing.value);
	const smoking = Number(event.target.elements.smoking.value);
	const powder = Number(event.target.elements.powder.value);
	const vape = Number(event.target.elements.vape.value);
	if (smoking + powder + vape >= 10) console.log('ХОБЛ', smoking + powder + vape);

	console.log(age);

	// allElements.map((element) => {
	// 	console.log(element);
	// 	if (element.checked) console.log(element.id);
	// });
});
