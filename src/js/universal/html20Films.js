import { filmsHomeHtml } from "./html.js";
export const imgUrl = import.meta.env.VITE_IMG_URL;

export async function text20films(arr, importedClass, width) {
  let text = "";

  arr.forEach((item) => {
    const obj = {
      baseImg: `${imgUrl}w${width}`,
      img: item.backdrop_path,
      title: item.original_title,
      rating: item.vote_average,
      htmlClass: importedClass,
    };
    text += filmsHomeHtml(obj);
  });

  return text;
}

/*
export async function genre20Films(arr) {
  let text = "";

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
*/
