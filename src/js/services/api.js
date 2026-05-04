import axios from "axios";

const api = import.meta.env.VITE_API_KEY;

export async function getTop20() {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}`,
    );

    console.log(res);

    return res.data.results;
  } catch (error) {
    console.log("error");
  }
}

export async function getGenreList() {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${api}`,
    );

    console.log(res.data.genres);

    return res.data.genres;
  } catch (error) {
    console.log("error");
  }
}

export async function findById(id, page) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${id}&language=en-US&api_key=${api}&page=${page}`,
    );

    console.log(res.data.results);

    return res.data.results;
  } catch (error) {
    console.log("error");
  }
}
