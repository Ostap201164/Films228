import { findById, findByIdFirst } from "../services/api.js";
import { genre20Films } from "../universal/html20Films.js";
import {
  genreFilmsContainer,
  paginationButtons,
  moviesByGenreLoaderRequest,
} from "../universal/domElements.js";
import {
  genreFilmPagination,
  curentPage,
  curentPage1,
} from "./genreFilmPagination.js";
import { pagination } from "../universal/html.js";
export let currentId;
let curentAbort = null;

export async function enterGenreFilm(event) {
  if (event.target.closest("button")) {
    if (curentAbort != null) {
      curentAbort.abort();
    }
    curentAbort = new AbortController();
    moviesByGenreLoaderRequest.classList.remove("is-hidden");
    const button = event.target;
    currentId = button.getAttribute("data-id");
    const firstPage = await findByIdFirst(currentId, curentAbort);
    
    console.log(firstPage);
    genreFilmsContainer.innerHTML = await genre20Films(firstPage.results);
    paginationButtons.innerHTML = await pagination(1);
    curentPage1();
    paginationButtons.addEventListener("click", genreFilmPagination);
    moviesByGenreLoaderRequest.classList.add("is-hidden");
  }
}

