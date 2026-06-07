/*export function top20Html(baseImg, img, title, rating) {
  return `<li class="swiper-slide ">
                    <img class="top20__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="top20__subcontainer">
                        <h2 class="top20__film-title">${title}</h2>
                        <div class="top20__rating rating">
                            <div class="rating__body">
                                <div class="rating__active" style="width: ${rating * 10}%"></div>
                                <div class="rating__items">
                                    <input id="rating__1" class="rating__item" name="rating" type="radio" value="1">
                                    <input id="rating__2" class="rating__item" name="rating" type="radio" value="2">
                                    <input id="rating__3" class="rating__item" name="rating" type="radio" value="3">
                                    <input id="rating__4" class="rating__item" name="rating" type="radio" value="4">
                                    <input id="rating__5" class="rating__item" name="rating" type="radio" value="5">
                                </div>
                            </div>
                            <p class="rating__value">${Math.round(rating * 5) / 10}</p>
                        </div>
                    </div>
                </li>`;
}

export function genre20Html(baseImg, img, title, rating) {
  return `<li class="moviesByGenre__film-item ">
                    <img class="moviesByGenre__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="moviesByGenre__subcontainer">
                        <h2 class="moviesByGenre__film-title">${title}</h2>
                        <div class="moviesByGenre__rating rating">
                            <div class="rating__body">
                                <div class="rating__active" style="width: ${rating * 10}%"></div>
                                <div class="rating__items">
                                    <input id="rating__1" class="rating__item" name="rating" type="radio" value="1">
                                    <input id="rating__2" class="rating__item" name="rating" type="radio" value="2">
                                    <input id="rating__3" class="rating__item" name="rating" type="radio" value="3">
                                    <input id="rating__4" class="rating__item" name="rating" type="radio" value="4">
                                    <input id="rating__5" class="rating__item" name="rating" type="radio" value="5">
                                </div>
                            </div>
                            <p class="rating__value">${Math.round(rating * 5) / 10}</p>
                        </div>
                    </div>
                </li>`;
}*/

export function filmsHomeHtml(obj) {
    return `<li class="${obj.htmlClass}__film-item swiper-slide">
                    <img class="${obj.htmlClass}__img" src="${obj.baseImg}${obj.img}" alt="img for each film">
                    <div class="${obj.htmlClass}__subcontainer">
                        <h2 class="${obj.htmlClass}__film-title">${obj.title}</h2>
                        <div class="${obj.htmlClass}__rating rating">
                            <div class="rating__body">
                                <div class="rating__active" style="width: ${obj.rating * 10}%"></div>
                                <div class="rating__items">
                                    <input  class="rating__item" name="rating" type="radio" value="1">
                                    <input  class="rating__item" name="rating" type="radio" value="2">
                                    <input  class="rating__item" name="rating" type="radio" value="3">
                                    <input  class="rating__item" name="rating" type="radio" value="4">
                                    <input  class="rating__item" name="rating" type="radio" value="5">
                                </div>
                            </div>
                            <p class="rating__value">${Math.round(obj.rating * 5) / 10}</p>
                        </div>
                    </div>
                </li>`;
}


export function bestFilm(baseImg, img, title, rating, description) {
  return `
                    <img class="bestFilm__img" src="${baseImg}${img}" alt="img for each film">
                    <div class="bestFilm__subcontainer">
                        <h2 class="bestFilm__film-title">${title}</h2>
                        <div class="bestFilm__rating rating">
                            <div class="rating__body">
                                <div class="rating__active" style="width: ${rating * 10}%"></div>
                                <div class="rating__items">
                                    <input class="rating__item" name="rating" type="radio" value="1">
                                    <input class="rating__item" name="rating" type="radio" value="2">
                                    <input class="rating__item" name="rating" type="radio" value="3">
                                    <input class="rating__item" name="rating" type="radio" value="4">
                                    <input class="rating__item" name="rating" type="radio" value="5">
                                </div>
                            </div>
                            <p class="rating__value">${Math.round(rating * 5) / 10}</p>
                        </div>
                        <p class="bestFilm__description">${description}</p>
                    </div>
                `;
}

export function genreList(arr) {
  let text = "";
  arr.forEach((item) => {
    text += `<button class="moviesByGenre__container-item moviesByGenre__container-item_1" data-filmsId="${item.id}">${item.name}</button>`;
  });
  return text;
}

export function pagination(page, totalPages) {
  let text = "";
  text += `<button class="moviesByGenre__pagination-button");" data-id="1">1</button>`;
  if (page == totalPages) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = 0; i < 2; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages + i - 2}">${totalPages + i - 2}</button>`;
    }
  } else if (page == totalPages - 1) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = 0; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages + i - 3}">${totalPages + i - 3}</button>`;
    }
  } else if (page == totalPages - 2) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = 0; i < 4; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages + i - 4}">${totalPages + i - 4}</button>`;
    }
  }else if (page == totalPages - 3) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = 0; i < 5; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages + i - 5}">${totalPages + i - 5}</button>`;
    }
  }else if (page == totalPages - 4) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = 0; i < 6; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages + i - 6}">${totalPages + i - 6}</button>`;
    }
  }else if (page >= 5) {
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
    for (let i = -1; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
  } else if (page == 4) {
    for (let i = -2; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
  } else if (page == 3) {
    for (let i = -1; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
  } else if (page == 2) {
    for (let i = 0; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i}">${page + i}</button>`;
    }
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
  } else if (page == 1) {
    for (let i = 0; i < 3; i++) {
      text += `<button class="moviesByGenre__pagination-button" data-id="${page + i + 1}">${page + i + 1}</button>`;
    }
    text += `<button class="moviesByGenre__pagination-button" data-id="threePoints">...</button>`;
  }

  text += `<button class="moviesByGenre__pagination-button" data-id="${totalPages}">${totalPages}</button>`;
  return text;
}
