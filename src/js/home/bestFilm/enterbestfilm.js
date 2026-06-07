import { htmlBestFilm } from "./htmlBestFilm.js";
import { bestFilmCard, homeLoader } from "../../universal/domElements.js";
export async function enterbestfilm(bestFilm) {
  const html = htmlBestFilm(bestFilm);
  bestFilmCard.innerHTML = `${html}`;
  homeLoader.classList.add("is-hidden")
}
