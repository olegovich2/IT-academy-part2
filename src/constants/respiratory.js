import { historyTaking } from '../utils/historyTaking';
import { metaData } from '../utils/metaData';

const formFromRespiratoryAnamnesis = document.querySelector('[data-form="respiratory"]');
const personalData = {};
const mixDiagnoses = [];

formFromRespiratoryAnamnesis.addEventListener('submit', (event) => {
	event.preventDefault();
	const nameSurname = event.target.elements.nameSurname.value;
	personalData.nameSurname = nameSurname;

	const age = Number(event.target.elements.age.value);
	personalData.age = age;

	const temperature = Number(event.target.elements.temperature.value);
	personalData.temperature = `${temperature}\u00B0C`;

	const weightBody = Number(event.target.elements.weightBody.value);
	const volumeOfLiquid = weightBody * 25;
	personalData.volumeOfLiquid = `${volumeOfLiquid}мл`;

	const soreThroat = Number(event.target.elements.soreThroat.value);
	const plaquesTonsils = Number(event.target.elements.plaquesTonsils.value);
	const runnyNose = Number(event.target.elements.runnyNose.value);
	const pollinosis = Number(event.target.elements.pollinosis.value);
	let cough = Number(event.target.elements.cough.value);

	const dyspnoea = Number(event.target.elements.dyspnoea.value);
	const sputum = Number(event.target.elements.sputum.value);
	const hemoptysis = Number(event.target.elements.hemoptysis.value);
	const chestPainBreathing = Number(event.target.elements.chestPainBreathing.value);
	const daysDisease = Number(event.target.elements.daysDisease.value);
	const frequentPneumonia = Number(event.target.elements.frequentPneumonia.value);
	const bronchialAsthmaAnamnesis = Number(event.target.elements.bronchialAsthmaAnamnesis.value);
	const bronchialAsthmaConfirmed = Number(event.target.elements.bronchialAsthmaConfirmed.value);
	const asthmaAttacks = Number(event.target.elements.asthmaAttacks.value);
	const smoking = Number(event.target.elements.smoking.value);
	const powder = Number(event.target.elements.powder.value);
	const vape = Number(event.target.elements.vape.value);
	const allElements = Array.from(event.target.elements);

	if (sputum > 0) cough = 2;
	if (daysDisease <= 28) {
		if (runnyNose > 0 && pollinosis === 0) mixDiagnoses.push('Острый ринит?');
		if (soreThroat > 0 && plaquesTonsils > 0) mixDiagnoses.push('Острый тонзиллит?');
		if (soreThroat > 0 && plaquesTonsils === 0) mixDiagnoses.push('Острый фарингит?');
		if (cough === 1) mixDiagnoses.push('Острый трахеит?');
		if (cough === 2 && sputum > 0) mixDiagnoses.push('Острый бронхит?');
		if (cough === 2 && sputum > 0 && dyspnoea > 20) mixDiagnoses.push('Острый обструктивный бронхит?');
		if (cough === 2 && sputum > 0 && asthmaAttacks > 0) mixDiagnoses.push('Острый бронхиолит?');
		if (cough === 2 && sputum > 0 && chestPainBreathing > 0) mixDiagnoses.push('Плеврит?');
		if (cough === 2 && sputum > 0 && frequentPneumonia > 0) mixDiagnoses.push('Бронхоэктатическая болезнь легких?');
	} else {
		if (runnyNose > 0 && pollinosis === 0) mixDiagnoses.push('Хронический ринит?');
		if (soreThroat > 0 && plaquesTonsils > 0) mixDiagnoses.push('Хронический тонзиллит?');
		if (soreThroat > 0 && plaquesTonsils === 0) mixDiagnoses.push('Хронический фарингит?');
		if (cough === 1) mixDiagnoses.push('Кашель, неясной этиологии?');
		if (cough === 2 && sputum > 0) mixDiagnoses.push('Хронический бронхит?');
		if (cough === 2 && sputum > 0 && dyspnoea > 20) mixDiagnoses.push('ХОБЛ?');
		if (cough === 2 && sputum > 0 && asthmaAttacks > 0) mixDiagnoses.push('ХОБЛ?');
		if (cough === 2 && sputum > 0 && frequentPneumonia > 0) mixDiagnoses.push('Бронхоэктатическая болезнь легких?');
	}
	if (bronchialAsthmaAnamnesis + asthmaAttacks === 2) mixDiagnoses.push('Бронхиальная астма?');
	if (cough === 2 && sputum > 0 && dyspnoea > 20) {
		if (hemoptysis === 0) mixDiagnoses.push('Внегоспитальная пневмония?');
		if (hemoptysis === 1) mixDiagnoses.push('Внегоспитальная пневмония, осложненная кровохарканьем?');
		if (hemoptysis === 2)
			mixDiagnoses.push(
				'Внегоспитальная пневмония, осложненная кровохарканьем?',
				'Туберкулез легких?',
				'ТЭЛА?',
				'Инфаркт-пневмония легких?',
			);
	}
	if (runnyNose > 0 && pollinosis > 0) mixDiagnoses.push('Поллиноз?');
	if (bronchialAsthmaConfirmed > 0) mixDiagnoses.push('Бронхиальная астма?');
	if (cough === 2 && sputum > 0 && dyspnoea > 20 && smoking + powder + vape >= 10) mixDiagnoses.push('ХОБЛ?');
	if (powder > 0) mixDiagnoses.push('Защита органов дыхания при помощи респиратора.');
	if (smoking + vape > 0) mixDiagnoses.push('Отказ от вредных привычек.');
	if (
		soreThroat +
			plaquesTonsils +
			runnyNose +
			pollinosis +
			cough +
			sputum +
			hemoptysis +
			chestPainBreathing +
			bronchialAsthmaAnamnesis +
			bronchialAsthmaConfirmed +
			asthmaAttacks ===
		0
	) {
		mixDiagnoses.push('На данный момент патологии не выявлено.');
	}
	const uniqueDiagnoses = new Set(mixDiagnoses);
	personalData.title = Array.from(uniqueDiagnoses);
	personalData.anamnesis = historyTaking(allElements);
	console.log(personalData);

	metaData(personalData);

	// const example = fetch('http://localhost:4000/movies?search=Acute%20Bronchitis').then(handleRequestResolve()).catch(handleRequestReject());
	// console.log(example);
});
