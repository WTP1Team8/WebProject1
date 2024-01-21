import {
  ABOUT,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  TRENDING,
} from "../common/constants.js";
import {
  loadCategories,
  loadCategory,
  loadMovies,
  loadSingleMovie,
  loadTrendingGifs,
  loadSingleGif,
} from "../requests/request-service.js";
import { toAboutView } from "../views/about-view.js";
import { toCategoriesView } from "../views/category-view.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toHomeView } from "../views/home-view.js";
import {
  toMoviesFromCategoryView,
  toSingleMovieView,
} from "../views/movie-views.js";
import { q, setActiveNav } from "./helpers.js";
import { getFavorites } from "../data/favorites.js";
import { toTrendingView, toSingleGifView } from "../views/trending-view.js";

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

export const renderMovieDetails = (id = null) => {
  const movie = loadSingleMovie(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const movies = loadMovies(category.id);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
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
  const gifs = await Promise.all(favorites.map((id) => loadSingleGif(id)));
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
};
