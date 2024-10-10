import { divForContent } from './openCardInHeader';
const app = require('../mockAPI/MoviesAPI.ReactJS/src/data/movies.json');
const url =
	'https://kinopoisk-ru.clstorage.net/16t4Ie117/7df5a4eMsXjG/8zwbwY22WXl_HSbA31Q9HFZV2tnowCGRq4uZyIYbAZmlO57NGTxwlxLAox-YVOTG7Cj6cUkykDRMnGU2TVW844csXjCsNqlsnnyDsB80Wb0jJd6obEVF0Hq4-tplCdL6Zq3cL1vNcbKTNWb6TcChUo1de5BNNPbFOB13kHiwe8ZTPQhzisRraIud9gNcBX04laXqHVqAYCWbyepYBBrx-sXuzu5aHKHhxfcEKt0CwwJtHG0x3uSkUio_d8PY0GrHY3zpgeuVG1r7rpXSXmT-uOWnSs1bsUJVGDvriOe7ogrF77yvSD1yIpf3hhpOQxETPuyPMVwGZ2H7XJVhKXHLdYAPGlBK1jv4aF42kVy3bennN0kfSzCSpnp56RgFmzP6ph89Xzse0vKVRxV6bQDTkgyfvcE9NaWAWn11kephGqeBTpuwyfaqexvtFEDP5i35pSd6vUvyM8cqqJq4ZWhh6GSszK2KHLPjpvZEqa9x4pJdzRwxnOZls1q9ZpE5watWEp9Z8ltFqdtbDcfSnpQOSyZU6t04EhBlm7mIWJXo0hvVP78Oi90Rw_aXdFotkgMSTv1vIAxEhiPaXmfDSrH4p8Cu6CEq19kY2570Up-03aqkdCquSnEAxFnKmAqGSWEqhN39H4nNkFPVF0YonBKTkG8NH0Hcdcchyd90QjkgCqagDNljuWb6uOlv9EB99J-555epHAmSsAVLa9o79frweRdcfS3pHYCBN7bVGN3xQiAuve5TXTdmAAiPJ8A5ceqnQg6bQhoGm6pavISyrCUe2Of3e825srPEeanLadeY8xkGDlzNia-AIHaXJevOozICbt0fMw12ZlI7DTcg2oHJZUAe6tM7J7gI6pxWws4knwp09_ssWeJhx6gpyht0e-CoVU__D4neQ5F0RZf67RGAopz_DhE-VIWRScz2QjpgeZax3UhCelX7WAh8BFJuFuxKhhX5PzoAM7RZefoIVrtSGwWfvB24L4GS5wRVK-1SweO-ny5A7yZVE6r894OYURr20d17YGuWC1h4zSeTfjb8-HQG-x56geLFKXiKadSIk5oH_26vS1yhsLa2lwidgoHgrz2f8Z1FlWB6vFSA6pGq5lBu68P61EnrSX50wM83fRqmFfktSlEQlNqb-LlEW5HYFo8tDuhuUKOXBaX6f6GCMg1_DFNPZ0WQe18XQjpzesdCvEmTijRbiKk91CFeVqxYVtTL3coR4-Vbe-opZhhQW9UvnU677CIS15dF-e0B8REs703wfUeVgUpuB0L649iUIy6qY7kUe0tZLyRin4Yd2AYG2b0qIPI2ObpJGmX5gzpHzX3Pqf2jkJZW1ev8ANAC7L9eIA9VhHApPFVSaFIbBmEMudHaF-vYas0moS50nDhGdVsvynFgBYuLm4tVyRBZNrxMPeo9IaMWdaXL32PxI3z8TjB9Z7dSqt23MakjS5TSDlpyKzf4CTpsJZN9lh4LtnU5rXhQ8DbYWiv7RCmhmdTOTp9pn3FTZFf3yA4CMtFOfZ5iXhd3Q7neR2AbYfu3cj7YIDtk2Bka_DQxTVRc-jaUm79KEkJW-KipaBUo0xkUD-xNKzzQQOZU5zu9sXKwjN1_Y_wFRWAazNYzSJIr1MN86sGJ1xg4WywHkw3FffoERCrtqxFwZvgYC2hGK6Fb1-xNb0ldkCJnxrQZ3-Dxkb3uXlBONZUQOoxXkatzyuXS_lnyGNULqXhe9cMsNf-JJdcKnSij8_WoScooxVrQSRU-LC2aDNLi9pT2eG1x8gKdbR9h_tVlYUqPB6NYIkkUso4ZgPp2ycvIn6TCnHY8SIeUCSx40PLHq6laa2dJ4GhXTc9_Gk4yAvSEpIk_AtDzTr1scO4FZyO5PzZRuJAKhJKu2ZBK9mmLSZ3mgL407fuFp8qvy4JildiqKlr0ORBIxO4uDfosUlPHN6SofjNR0Ow9_0E89_eDSSyUADoDS_Rg30iCq4UbmDifp-IMhn3r5zSLHGkQ0rWJW7vZ1AtxuCbPfUypjVNghRWGugyzE5K_DW3ibsfH4ah-dYI6Idu3YM4YgOpXqkpYr7fgDGc_2dXEGW3bsFD2CmtKamdpwyunbN5--20gMrc1NensMgECb0xdkR1UJpAYjLYTO0PqtIAO-2JJJthY6d3XQi13LZp2xiuOWFEiJGt5G_nXSlErpb4ffqnuo-BHRscoHSAhki1e7SNMJ-QRG32l8mqDmQQiz2hSi-ZbuIuMNjKuJp461OfKP0jRQXXbKRkLJ2ijWuUsfV3b33BDttb3aD4QkeNvzfxTD_WUcco_V-GK0-l30k758avEy5sZvndRDiSu6eU3mL9I0lO3ybgrCmVJ0Eg33M_d654gAGW0dcu9gILjDv6vMQ9X5CJZT1XR-HJ6pdBPW6HZdflbeIw1c39lLdjFJuuNOsFAFavZ-Ki2W2IKVC-8n2htUHNEhUS4nBDTIgzu7aHt94fyC-62oWiAeNexP6gA6ve7ySm_FaOuRhyoZkWbTjgx8YdqG8k59erxmYSufH_5j1IRJpb1W42Qk-NfD52hj3enYqs9dyIJ4ZsksA7Yg7gF6Aop3FbijQRO2neluv2KArPWKBvbegZ70bsXnm0-iwxzkoV1Rsi_o8CxDN1PMV42dGGJ7lWgKQJI9PD-KPJ6BquZ2b43kH1l_umlh0mtWKAT9zir6dpESrI4B628brp84UDnJNYLD0KA0K9tLdOeVWXQGw8n0hlDGtRBXviDy0eL2Uvf1vL8JOz7NFXJvQuTYEXYGhtrF0mRWCYvjAypTSPBZVS2iA3z4sJcPS-BzTenQ0kcddBZMZvWQSxb4YoVmjnLXteCzmdvmCYmmq5b4AN3uamqGQYJIbj1TB0ciF5z05SE9co90gDQj_zvgH9llRJ6LzeCGeMrhAE9q4Dbp4v7C66nsxxmLFuW9PnPyJHQdEpqGwlXWtJLlg7czym_IIMlN0Qqj-HxsO1ebQDsFCXxs';
const newArr = [];
const offset = 30;
for (let i = 0; i < offset; i++) {
	newArr.push(app[i]);
}
const getDataFromApp = (array) => {
	return array.map((arrayItem) => createMovieCard(prepareMovieData(arrayItem)));
};

const prepareMovieData = (data) => {
	return {
		image: url,
		title: data.title,
		rating: data.vote_average,
		genres: data.genres,
		releaseDate: data.release_date,
		runtime: data.runtime,
		overview: data.overview,
	};
};

const createMovieCard = (data) => {
	const cardTemplate = document.querySelector('[data-modal="card"]')?.content;

	if (!cardTemplate) throw new Error('cardTemplate not found');
	const movieCard = cardTemplate.childNodes[1].cloneNode(true);
	movieCard.querySelector('[data-container="image"]').src = data.image;
	movieCard.querySelector('[data-container="image"]').title = data.title;
	movieCard.querySelector('[data-container="image"]').alt = data.title;
	movieCard.querySelector('[data-container="title"]').textContent = data.title;
	movieCard.querySelector('[data-container="rating"]').textContent = data.rating;
	movieCard.querySelector('[data-container="release"]').textContent = data.releaseDate;
	let genres = '';
	for (let i = 0; i < data.genres.length; i++) {
		genres += data.genres[i] + ' ';
	}
	movieCard.querySelector('[data-container="genres"]').textContent = genres;
	movieCard.querySelector('[data-container="runtime"]').textContent = data.runtime;
	movieCard.querySelector('[data-container="overview"]').textContent = data.overview;
	divForContent.append(movieCard);
};

document.addEventListener('DOMContentLoaded', () => {
	getDataFromApp(newArr);
});
