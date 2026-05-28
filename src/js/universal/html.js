export function top20Html(baseImg, img, title, raiting) {
  return `<li class="swiper-slide ">
                    <img class="top20__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="top20__subcontainer">
                        <h2 class="top20__film-title">${title}</h2>
                        <div class="top20__raiting raiting">
                            <div class="raiting__body">
                                <div class="raiting__active" style="width: ${raiting * 10}%"></div>
                                <div class="raiting__items">
                                    <input id="raiting__1" class="raiting__item" name="raiting" type="radio" value="1">
                                    <input id="raiting__2" class="raiting__item" name="raiting" type="radio" value="2">
                                    <input id="raiting__3" class="raiting__item" name="raiting" type="radio" value="3">
                                    <input id="raiting__4" class="raiting__item" name="raiting" type="radio" value="4">
                                    <input id="raiting__5" class="raiting__item" name="raiting" type="radio" value="5">
                                </div>
                            </div>
                            <p class="raiting__value">${Math.round(raiting * 5) / 10}</p>
                        </div>
                    </div>
                </li>`;
}

export function genre20Html(baseImg, img, title, raiting) {
  return `<li class="moviesByGenre__film-item ">
                    <img class="moviesByGenre__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="moviesByGenre__subcontainer">
                        <h2 class="moviesByGenre__film-title">${title}</h2>
                        <div class="moviesByGenre__raiting raiting">
                            <div class="raiting__body">
                                <div class="raiting__active" style="width: ${raiting * 10}%"></div>
                                <div class="raiting__items">
                                    <input id="raiting__1" class="raiting__item" name="raiting" type="radio" value="1">
                                    <input id="raiting__2" class="raiting__item" name="raiting" type="radio" value="2">
                                    <input id="raiting__3" class="raiting__item" name="raiting" type="radio" value="3">
                                    <input id="raiting__4" class="raiting__item" name="raiting" type="radio" value="4">
                                    <input id="raiting__5" class="raiting__item" name="raiting" type="radio" value="5">
                                </div>
                            </div>
                            <p class="raiting__value">${Math.round(raiting * 5) / 10}</p>
                        </div>
                    </div>
                </li>`;
}

export function bestFilm(baseImg, img, title, raiting, desription) {
  return `
                    <img class="bestFilm__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="bestFilm__subcontainer">
                        <h2 class="bestFilm__film-title">${title}</h2>
                        <div class="bestFilm__raiting raiting">
                            <div class="raiting__body">
                                <div class="raiting__active" style="width: ${raiting * 10}%"></div>
                                <div class="raiting__items">
                                    <input id="raiting__1" class="raiting__item" name="raiting" type="radio" value="1">
                                    <input id="raiting__2" class="raiting__item" name="raiting" type="radio" value="2">
                                    <input id="raiting__3" class="raiting__item" name="raiting" type="radio" value="3">
                                    <input id="raiting__4" class="raiting__item" name="raiting" type="radio" value="4">
                                    <input id="raiting__5" class="raiting__item" name="raiting" type="radio" value="5">
                                </div>
                            </div>
                            <p class="raiting__value">${Math.round(raiting * 5) / 10}</p>
                        </div>
                        <p class="bestFilm__desription">${desription}</p>
                    </div>
                `;
}

export function genreList(arr) {
  let text = "";
  arr.forEach((item) => {
    text += `<button class="moviesByGenre__container-item moviesByGenre__container-item_1" data-id="${item.id}">${item.name}</button>`;
  });
  return text;
}

export function pagination(page) {
  let text = "";
  text += `<button class="moviesByGenre__pagination-button" data-id="1">1</button>`;
  if (page >= 4) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = -1; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
  } else if (page == 3) {
    for (let i = -1; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
  } else if (page == 2) {
    for (let i = 0; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
  } else if (page == 1) {
    for (let i = 0; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i + 1}">${page + i + 1}</button>`;
    }
  }

  text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;

  return text;
}
