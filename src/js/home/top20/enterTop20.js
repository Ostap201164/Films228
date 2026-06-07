import { text20films } from "../../universal/html20Films.js";
import { top20SwiperWraper } from "../../universal/domElements.js";
import { swiperTop20 } from "./swiperTop20.js";

export async function enterTop20(data) {
  const text = await text20films(data, "top20", 400);  
  top20SwiperWraper.innerHTML = await `${text}`;
  swiperTop20()
}


