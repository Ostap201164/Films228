import { bestFilm } from "../../universal/html.js";
const imgUrl = import.meta.env.VITE_IMG_URL;
export function htmlBestFilm(obj) {
  return bestFilm(
    `${imgUrl}w400`,
    obj.backdrop_path,
    obj.original_title,
    obj.vote_average,
    obj.overview
  );
}
