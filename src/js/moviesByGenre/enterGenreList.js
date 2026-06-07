import { genreList } from "../universal/html.js";
import { getGenreList } from "../services/api.js";
import { genreListEl } from "../universal/domElements.js";
import { moviesByGenreLoaderStart } from "../universal/domElements.js";
import { doAnAbort } from "./abortController.js";
import { enterGenreError } from "./enterGenreError.js";
export async function enterGenreList() {
  const genreListArr = await getGenreList();
  if (genreListArr != "error") {
    const genreListTxt = genreList(genreListArr);
    genreListEl.innerHTML = genreListTxt;
    moviesByGenreLoaderStart.classList.add("is-hidden");
  } else {
    enterGenreError()
  }
}
