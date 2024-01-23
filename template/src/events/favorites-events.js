import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a GIF.
 * 
 * @param {string} gifId - The ID of the GIF.
 * @returns {void}
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);

  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 * Renders the favorite status of a GIF.
 * 
 * @param {string} gifId - The ID of the GIF.
 * @returns {string} The HTML representation of the favorite status.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
