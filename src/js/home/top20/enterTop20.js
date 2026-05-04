import { top20Films, imgUrl } from "../../universal/html20Films.js";
import { top20SwiperWraper } from "../../universal/domElements.js";
import { swiperTop20 } from "./swiperTop20.js";

export async function enterTop20(data) {
  const text = await top20Films(data,400, "top20");  
  top20SwiperWraper.innerHTML = await `${text}`;
  swiperTop20()
}


