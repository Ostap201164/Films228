import { enterTop20 } from "./home/top20/enterTop20.js";
import { text20films, bestFilm } from "./home/homeGetFilms.js";
import { enterbestfilm } from "./home/bestFilm/enterbestfilm.js";
import { headerHome, } from "./universal/domElements.js";
enterTop20(text20films);
enterbestfilm(bestFilm);

headerHome.classList.add("header__active-url");




