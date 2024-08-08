const ru = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "Ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];
const eng = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let lang = prompt("Enter the lang eng/ru");
if (lang.toLowerCase() == "ru") {
  language = ru;
} else if (lang.toLowerCase() == "eng") {
  language = eng;
}
let text = prompt("To encrypt for message:/Сообщение для зашифровки:");
let shift = Number(
  prompt(
    "Select displacement(Number between 0 and 24 for eng):/Выберите сдвиг(Число  0 до 32 для ru):"
  )
);
console.log(shift, text, lang);
function encrypt(language, text, shift) {
  let encrypt = "";
  for (let i of text.toLowerCase()) {
    let place = language.indexOf(i);
    if (place === -1) {
      alert("Language is incorrect/Неверно выбран язык");
      break;
    } else {
      let placeNew = place + shift;
      if (placeNew > language.length - 1) {
        placeNew -= language.length;
        encrypt += language[placeNew];
      } else {
        encrypt += language[placeNew];
      }
    }
  }
  console.log(`Result:/Результат шифрования: ${encrypt}`);
  return encrypt;
}
function decrypt(language, shift) {
  let forDecryption = encrypt(language, text, shift);
  let decrypt = "";
  for (let i of forDecryption) {
    let place = language.indexOf(i);
    let placeNew = place - shift;
    if (placeNew < 0) {
      placeNew += language.length;
      decrypt += language[placeNew];
    } else {
      decrypt += language[placeNew];
    }
  }
  return `Result:/Результат расшифрования: ${decrypt}`;
}
console.log(decrypt(language, shift));
