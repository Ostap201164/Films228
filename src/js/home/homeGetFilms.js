import { getTop20 } from "../services/api.js";
import { enterError } from "./enterError.js";
async function homeGetFilms() {
  const data = await getTop20();
  if (data != "error") {
    return [data, data[0]];
  }
  enterError();
  return "error";
}
const spliter = await homeGetFilms();
export let bestFilm, text20films;
if (spliter != "error") {
  bestFilm = spliter[1]
  text20films = spliter[0]
}
