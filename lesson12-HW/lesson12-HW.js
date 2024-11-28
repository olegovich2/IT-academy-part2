/*Фото галлерея

Давайте сделаем фотогалерея
у нас есть эндпоинт (https://jsonplaceholder.typicode.com/photos)  который возвращает массив фото
у каждого элемента есть albumId сгруппировать фото по этим параметрам и создать соответствующий альбом на странице затем альбом с другим  albumId и тд
изображения должны быть из thumbnailUrl
если изображение не может быть загружено то применить дефолтную картинку (на свой вкус)
при нажатии на соответствующую картинку должно открыться модальное окно с полным изображением которое хранится в url (стили так же должны быть) */

const getDataFromUrl = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const defaultUrl = "https://zornet.ru/_fr/21/3662993.png";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = (dataAlbum) => {
    dataAlbum = JSON.parse(xhr.response);
    const body = document.querySelector("body");
    for (const key of dataAlbum) {
      const img = document.createElement("img");
      img.src = key.thumbnailUrl;
      img.title = key.title;
      img.alt = key.title;
      if (xhr.status !== 200) {
        img.src = defaultUrl;
        img.title = "Default image";
        img.alt = "Default image";
      }
      body.appendChild(img);
    }
    actionImg();
  };
};

function actionImg() {
  const actionImg = document.querySelector("body");
  actionImg.onclick = function (event) {
    let target = event.target;
    if (target.tagName === "BODY") return;
    target.classList.toggle("action");
  };
}
document.addEventListener("DOMContentLoaded", getDataFromUrl());
