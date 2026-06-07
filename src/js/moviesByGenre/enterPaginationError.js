import { genreSecondTitle } from "../universal/domElements.js";
export function enterPaginationError() {
    genreSecondTitle.innerHTML += " (lost connection with server)";
}