import axios from "axios";
const api = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export async function getTop20() {
  try {
    const res = await axios.get(`${baseUrl}/movie/top_rated?api_key=${api}`);

    console.log(res);

    return res.data.results;
  } catch (error) {
    console.log("error");
  }
}

export async function getGenreList() {
  try {
    const res = await axios.get(
      `${baseUrl}/genre/movie/list?language=en&api_key=${api}`,
    );

    console.log(res.data.genres);

    return res.data.genres;
  } catch (error) {
    console.log("error");
  }
}

export async function findById(id, page, controller) {
  try {
    const res = await axios.get(
      `${baseUrl}/discover/movie?with_genres=${id}&language=en-US&api_key=${api}&page=${page}`,
      { signal: controller.signal },
    );

    console.log(res.data.results);

    return res.data.results;
  } catch (error) {
    console.log("error");
  }
}

export async function findByIdFirst(id, controller) {
  try {
    const res = await axios.get(
      `${baseUrl}/discover/movie?with_genres=${id}&language=en-US&api_key=${api}&page=1`,
      {signal: controller.signal}
    );

    console.log(res.data.results);

    return res.data;
  } catch (error) {
    console.log("error");
  }
}
