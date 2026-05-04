import Swiper from "swiper";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
/*export function swiperTop20() {
  new Swiper(".top20__swiper", {
    modules: [Navigation],

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoHeight: false,
slidesPerView: 2,
slidesPerGroup: 2,
    loop: true,
    spaceBetween: 30,
  });
}*/
export function swiperTop20() {
  new Swiper(".top20__swiper", {
    modules: [Navigation],

    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    autoHeight: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
