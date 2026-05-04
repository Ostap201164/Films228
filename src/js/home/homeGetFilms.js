import { getTop20 } from "../services/api.js";
async function homeGetFilms() {
  const data = await getTop20();
  return [data, data[0]];
}
const spliter = await homeGetFilms();
export const bestFilm = spliter[1];
export const top20Films = spliter[0];

