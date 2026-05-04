export function top20Html(baseImg, img, title, raiting) {
  return `<div class="swiper-slide ">
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
                </div>`;
}

export function genre20Html(baseImg, img, title, raiting) {
  return `<div class="moviesByGenre__film-item ">
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
                </div>`;
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
  return `
<button class="moviesByGenre__container-item moviesByGenre__container-item_1" data-id="${arr[0].id}">${arr[0].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_2" data-id="${arr[1].id}">${arr[1].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_3" data-id="${arr[2].id}">${arr[2].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_4" data-id="${arr[3].id}">${arr[3].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_5" data-id="${arr[4].id}">${arr[4].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_6" data-id="${arr[5].id}">${arr[5].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_7" data-id="${arr[6].id}">${arr[6].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_8" data-id="${arr[7].id}">${arr[7].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_9" data-id="${arr[8].id}">${arr[8].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_10" data-id="${arr[9].id}">${arr[9].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_11" data-id="${arr[10].id}">${arr[10].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_12" data-id="${arr[11].id}">${arr[11].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_13" data-id="${arr[12].id}">${arr[12].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_14" data-id="${arr[13].id}">${arr[13].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_15" data-id="${arr[14].id}">${arr[14].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_16" data-id="${arr[15].id}">${arr[15].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_17" data-id="${arr[16].id}">${arr[16].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_18" data-id="${arr[17].id}">${arr[17].name}</button>
<button class="moviesByGenre__container-item moviesByGenre__container-item_19" data-id="${arr[18].id}">${arr[18].name}</button>`;
}

export function pagination(page) {
    console.log(page * 10 + 1);
    
  return `
  <div class="moviesByGenre__pagination">
  <button class="moviesByGenre__pagination-button" data-id="${0 + page * 10}">${1 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${1 + page * 10}">${2 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${2 + page * 10}">${3 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${3 + page * 10}">${4 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${4 + page * 10}">${5 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${5 + page * 10}">${6 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${6 + page * 10}">${7 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${7 + page * 10}">${8 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${8 + page * 10}">${9 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="${9 + page * 10}">${10 + page * 10}</button>
  <button class="moviesByGenre__pagination-button" data-id="9999">Next button</button>
  <button class="moviesByGenre__pagination-button" data-id="8888">Previous button</button>
  </div>
    `;
}
