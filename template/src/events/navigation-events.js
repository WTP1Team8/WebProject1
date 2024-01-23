import {
  ABOUT,
  CONTAINER_SELECTOR,
  FAVORITES,
  HOME,
  TRENDING,
  UPLOADED,
} from '../common/constants.js';
import {
  loadTrendingGifs,
  loadSingleGif,
} from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toHomeView } from '../views/home-view.js';
import { q, setActiveNav } from './helpers.js';
import { getFavorites } from '../data/favorites.js';
import { getUploaded } from '../data/uploaded.js';
import { toTrendingView, toSingleGifView } from '../views/trending-view.js';
import { toRandomItemView } from '../views/favorites-view.js';
import { getRandomGIF } from '../views/favorites-view.js';
import {
  toUploadNowView,
  toUploadNowEmptyView,
} from '../views/upload-view.js';

// public API
/**
 * Loads a specific page based on the provided page parameter.
 * @param {string} page - The page to load.
 * @returns {null} - Returns null if the page is not recognized.
 */
export const loadPage = (page = '') => {
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

  case UPLOADED:
    setActiveNav(UPLOADED);
    return renderUploaded();

  case ABOUT:
    setActiveNav(ABOUT);
    return renderAbout();

    /* if the app supports error login, use default to log mapping errors */
  default:
    return null;
  }
};

/**
 * Renders the details of a GIF.
 * 
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<void>} - A promise that resolves when the GIF details are rendered.
 */
export const renderGifDetails = async (id) => {
  const gifDetails = await loadSingleGif(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gifDetails);
};

// private functions

/**
 * Renders the home view by updating the content of the container element.
 */
const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

/**
 * Renders the trending gifs by loading them and updating the container element with the trending view.
 * @returns {Promise<void>} A promise that resolves when the trending gifs are loaded and the container element is updated.
 */
const renderTrending = async () => {
  const trendingGifs = await loadTrendingGifs();

  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};

/**
 * Renders the about view by updating the innerHTML of the container element.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders the favorites by loading and displaying the corresponding GIFs.
 * If there are favorites, it loads each GIF using the loadSingleGif function and displays them in the container.
 * If there are no favorites, it loads a random GIF using the getRandomGIF function and displays it in the container.
 * 
 * @returns {Promise<void>} A promise that resolves once the rendering is complete.
 */
const renderFavorites = async () => {
  const favorites = getFavorites();
  if (favorites.length > 0) {
    const gifs = await Promise.all(favorites.map((id) => loadSingleGif(id)));
    q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gifs);
  } else {
    const randomGif = await getRandomGIF();

    q(CONTAINER_SELECTOR).innerHTML = await toRandomItemView(randomGif);
  }
};

/**
 * Renders the uploaded GIFs on the page.
 * 
 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderUploaded = async () => {
  const uploadedGifs = getUploaded();

  if (uploadedGifs.length === 0) {
    q(CONTAINER_SELECTOR).innerHTML = toUploadNowEmptyView();
  } else {
    const gifs = await Promise.all(
      uploadedGifs.reverse().map((id) => loadSingleGif(id))
    );
    const existingGifs = gifs.filter((e) => e !== undefined);
    q(CONTAINER_SELECTOR).innerHTML = toUploadNowView(existingGifs);
  }
};
