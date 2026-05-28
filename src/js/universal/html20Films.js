
import { top20Html, genre20Html } from "./html.js";
export const imgUrl = import.meta.env.VITE_IMG_URL;
console.log(imgUrl);

export async function top20Films(arr) {
  let text = "";
  arr.forEach((item) => {
    text += top20Html(
      `${imgUrl}w400`,
      item.backdrop_path,
      item.original_title,
      item.vote_average,
    );
  });

  return text;
}

export async function genre20Films(arr) {
  
  
  let text = "";
  console.log(arr);
  
  arr.forEach((item) => {
    text += genre20Html(
      `${imgUrl}w200`,
      item.backdrop_path,
      item.original_title,
      item.vote_average,
    );
  });

  return text;
}