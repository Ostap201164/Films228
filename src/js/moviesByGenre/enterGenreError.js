import { genreTitle, genreSecondTitle } from "../universal/domElements.js";
export function enterGenreError() {
    genreTitle.innerHTML += " (lost connection with server)";
    genreSecondTitle.innerHTML += " (lost connection with server)";
}