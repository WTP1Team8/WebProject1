import { CONTAINER_SELECTOR } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';

/**
 * Renders search items based on the provided search term.
 * 
 * @param {string} searchTerm - The search term to be used for searching gifs.
 * @returns {Promise<void>} - A promise that resolves once the search items are rendered.
 */
export const renderSearchItems = async (searchTerm) => {
  const searchedGifs = await loadSearchGifs(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchedGifs, searchTerm);
};
