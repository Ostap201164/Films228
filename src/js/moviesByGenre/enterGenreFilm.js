import { findById } from "../services/api.js";
import { text20films } from "../universal/html20Films.js";
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
import { doAnAbort } from "./abortController.js";
import { enterPaginationError } from "./enterPaginationError.js";
export let currentId, totalPages;
let lastGenre = null;

export async function enterGenreFilm(event) {
  moviesByGenreLoaderRequest.classList.remove("is-hidden");
  if (event.target.closest("button")) {
    const button = event.target;
    currentId = button.getAttribute("data-filmsId");
    if (currentId != lastGenre) {
      const curentAbort = doAnAbort();
      lastGenre = currentId;
      const firstPage = await findById(currentId, 1, curentAbort);
      console.log(firstPage);
      
      if (firstPage == "error") {
        enterPaginationError()
        moviesByGenreLoaderRequest.classList.add("is-hidden");
        return 0
      }
      totalPages = firstPage.total_pages;
      if (totalPages > 500) {
        totalPages = 500;
      }
      genreFilmsContainer.innerHTML = await text20films(firstPage.results, "moviesByGenre", 200);
      paginationButtons.innerHTML = await pagination(1, totalPages);
      curentPage1();
      paginationButtons.addEventListener("click", genreFilmPagination);
      const firstBtn = document.querySelector(`[data-id="1"]`);
      firstBtn.classList.add("moviesByGenre__pagination-button_active");
    }
  }
  moviesByGenreLoaderRequest.classList.add("is-hidden");
}
