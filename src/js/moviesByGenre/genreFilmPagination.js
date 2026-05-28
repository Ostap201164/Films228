import { genre20Films } from "../universal/html20Films.js";
import { findById } from "../services/api.js";
import {
  genreFilmsContainer,
  paginationButtons,
  moviesByGenreLoaderRequest,
} from "../universal/domElements.js";
import { currentId } from "./enterGenreFilm.js";
import { pagination } from "../universal/html.js";
export let curentPage = 1;
let curentAbort = null;
export async function genreFilmPagination(event) {
  if (event.target.closest("button")) {
    moviesByGenreLoaderRequest.classList.remove("is-hidden");
    if (curentAbort != null) {
      curentAbort.abort();
    }
    curentAbort = new AbortController();
    const button = event.target;
    const id = button.getAttribute("data-id");
    if (id == "threePoints") {
      moviesByGenreLoaderRequest.classList.add("is-hidden");
    } else {
      const numbId = Number(id);
      curentPage = numbId;
      const films = await findById(currentId, numbId, curentAbort);
      const filmsText = await genre20Films(films);
      genreFilmsContainer.innerHTML = filmsText;

      const buttonsText = pagination(curentPage);
      paginationButtons.innerHTML = buttonsText;
      moviesByGenreLoaderRequest.classList.add("is-hidden");
    }
  }
}

export function curentPage1() {
  curentPage = 1;
}
