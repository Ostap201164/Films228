import { enterTop20 } from "./home/top20/enterTop20.js";
import { top20Films, bestFilm } from "./home/homeGetFilms.js";
import { enterbestfilm } from "./home/bestFilm/enterbestfilm.js";
import { headerHome, } from "./universal/domElements.js";
enterTop20(top20Films);
enterbestfilm(bestFilm);

headerHome.classList.add("header__active-url");




