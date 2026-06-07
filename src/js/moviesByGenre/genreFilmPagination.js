import { text20films } from "../universal/html20Films.js";
import { findById } from "../services/api.js";
import {
  genreFilmsContainer,
  paginationButtons,
  moviesByGenreLoaderRequest,
} from "../universal/domElements.js";
import { currentId, totalPages } from "./enterGenreFilm.js";
import { pagination } from "../universal/html.js";
import { doAnAbort } from "./abortController.js";
export let curentPage = 1;

export async function genreFilmPagination(event) {
  moviesByGenreLoaderRequest.classList.remove("is-hidden");
  if (event.target.closest("button")) {
    const button = event.target;
    const id = button.getAttribute("data-id");
    const numbId = Number(id);
    if (id == "threePoints" || numbId == curentPage) {
    } else {
      const curentAbort = doAnAbort();
      const prevBtn = document.querySelector(`[data-id="${curentPage}"]`);
      prevBtn.classList.remove("moviesByGenre__pagination-button_active");
      curentPage = numbId;
      const films = await findById(currentId, numbId, curentAbort);
      const filmsText = await text20films(films.results, "moviesByGenre", 200);
      genreFilmsContainer.innerHTML = filmsText;

      const buttonsText = pagination(curentPage, totalPages);
      paginationButtons.innerHTML = buttonsText;
      const activeBtn = document.querySelector(`[data-id="${curentPage}"]`);
      activeBtn.classList.add("moviesByGenre__pagination-button_active");
    }
  }
  moviesByGenreLoaderRequest.classList.add("is-hidden");
}

export function curentPage1() {
  curentPage = 1;
}
