import { homeBestFilmTitle, homeTop20Title } from "../universal/domElements.js";
export function enterError() {
  homeBestFilmTitle.innerHTML += " (lost connection with server)";
  homeTop20Title.innerHTML += " (lost connection with server)";
}
