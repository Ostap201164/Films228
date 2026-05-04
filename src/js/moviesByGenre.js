import { enterGenreList } from "./moviesByGenre/enterGenreList.js";
import { headerGenre, genreListEl } from "./universal/domElements.js";
import { enterGenreFilm } from "./moviesByGenre/enterGenreFilm.js";
headerGenre.classList.add("header__active-url");
enterGenreList()
genreListEl.addEventListener("click", enterGenreFilm)