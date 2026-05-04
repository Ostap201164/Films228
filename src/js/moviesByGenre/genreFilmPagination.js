import { genreFilmsArr } from "./enterGenreFilm.js";
import { genre20Films } from "../universal/html20Films.js";
import {
  genreFilmsContainer,
  paginationButtons,
} from "../universal/domElements.js";
import { pagination } from "../universal/html.js";
export let curentPage = 0;
export async function genreFilmPagination(event) {
  if (event.target.closest("button")) {
    const button = event.target;
    const id = button.getAttribute("data-id");
    const numbId = Number(id);
    if (id == 9999 && ((genreFilmsArr.length/ 10) - 1) > curentPage) {
      console.log(genreFilmsArr.length);
      console.log(genreFilmsArr);
      
      curentPage += 1;
      const text = pagination(curentPage);
      paginationButtons.innerHTML = text;
    } else if (id == 8888 && curentPage > 0) {
      curentPage -= 1;
      const text = pagination(curentPage);
      paginationButtons.innerHTML = text;
    } else if (id < 8888) {
      

      const text = await genre20Films(genreFilmsArr[numbId]);

      genreFilmsContainer.innerHTML = text;
    }
  }
}

export function curentPage0() {
  curentPage = 0;
}
