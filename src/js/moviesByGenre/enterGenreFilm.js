import { findById } from "../services/api.js";
import { genre20Films } from "../universal/html20Films.js";
import {
  genreFilmsContainer,
  paginationButtons,
  moviesByGenreLoaderRequest,
} from "../universal/domElements.js";
import {
  genreFilmPagination,
  curentPage,
  curentPage0,
} from "./genreFilmPagination.js";
import { pagination } from "../universal/html.js";
export let genreFilmsArr;
export async function enterGenreFilm(event) {
  if (event.target.closest("button")) {
    moviesByGenreLoaderRequest.classList.remove("is-hidden");
    genreFilmsArr = [];
    const button = event.target;
    const id = button.getAttribute("data-id");
    let permission = true;
    for (let i = 1; permission; i++) {
      const arr = await findById(id, i);
      if (arr == undefined) {
        console.log(i);
        permission = false;
      }

      genreFilmsArr.push(arr);
    }
    console.log(genreFilmsArr[0]);

    genreFilmsContainer.innerHTML = await genre20Films(genreFilmsArr[0]);
    paginationButtons.innerHTML = await pagination(0);
    curentPage0();
    paginationButtons.addEventListener("click", genreFilmPagination);
    moviesByGenreLoaderRequest.classList.add("is-hidden");
  }
}
