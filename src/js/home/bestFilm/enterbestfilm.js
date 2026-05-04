import { htmlBestFilm } from "./htmlBestFilm.js";
import { bestFilm } from "../homeGetFilms.js";
import { bestFilmCard, homeLoader } from "../../universal/domElements.js";
export async function enterbestfilm(bestFilm) {
  const html = htmlBestFilm(bestFilm);
  console.log(html);
  
  bestFilmCard.innerHTML = await `${html}`;
  homeLoader.classList.add("is-hidden")
}
