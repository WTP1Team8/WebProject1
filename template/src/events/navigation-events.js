import {
  ABOUT,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  TRENDING,
} from "../common/constants.js";
import {
  loadTrendingGifs,
  loadSingleGif,
} from "../requests/request-service.js";
import { toAboutView } from "../views/about-view.js";
import { toHomeView } from "../views/home-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import { toTrendingView, toSingleGifView } from "../views/trending-view.js";
import { toRandomItemView } from "../views/favorites-view.js";
import { getRandomGIF } from "../views/favorites-view.js";

// public API
export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
    default:
      return null;
  }
};

export const renderGifDetails = async (id) => {
  const gifDetails = await loadSingleGif(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gifDetails);
};


// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};


const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

const renderFavorites = async () => {
  const favorites = getFavorites();
  if(favorites.length>0){
    const gifs = await Promise.all(favorites.map((id) => loadSingleGif(id)));
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
  }else{
    const randomGif = await getRandomGIF();

  q(CONTAINER_SELECTOR).innerHTML = await toRandomItemView(randomGif);
  }
};
