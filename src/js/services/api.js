import axios from "axios";
const api = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const imgUrl = import.meta.env.VITE_IMG_URL;


export async function getTop20() {
  try {
    const res = await axios.get(`${baseUrl}/movie/top_rated?api_key=${api}`);

    return res.data.results;
  } catch (error) {
    console.log("error");
    return "error";
  }
}

export async function getGenreList() {
  try {
    const res = await axios.get(
      `${baseUrl}/genre/movie/list?language=en&api_key=${api}`,
    );

    return res.data.genres;
  } catch (error) {
    console.log("error");
    return "error"
  }
}

export async function findById(id, page, controller) {
  try {
    const res = await axios.get(
      `${baseUrl}/discover/movie?with_genres=${id}&language=en-US&api_key=${api}&page=${page}`,
      { signal: controller.signal },
    );

    return res.data;
  } catch (error) {
    console.log("error");
    return "error"
  }
}