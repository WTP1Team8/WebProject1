import { getTrendingUrl, getSearchUrl, getIdUrl } from '../common/constants.js';
/**
 *
 * @returns {Promise<Array<{
 * id: string,
 * rating: string,
 * title: string,
 * images: {
 *  fixed_width: {
 *  url: string,
 * },
 * },
 * user: {
 *  avatar_url: string,
 *  username: string,
 * },
 * }>>}
 */
export const loadTrendingGifs = async () => {
  const response = await fetch(getTrendingUrl(36));
  const result = await response.json();

  return result.data;
};

/**
 *
 * @param {string} query
 * @returns {Promise<Array<{
 * id: string,
 * rating: string,
 * title: string,
 * images: {
 *  fixed_width: {
 *  url: string,
 * },
 * },
 * user: {
 *  avatar_url: string,
 *  username: string,
 * },
 * }>>}
 */
export const loadSearchGifs = async (query = '') => {
  try {
    const response = await fetch(getSearchUrl(query));

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    return `Error fetching data: ${error.message}`;
  }
};

/**
 * Loads a single GIF by its ID.
 * @param {string} id - The ID of the GIF to load.
 * @returns {Promise<Object>} - A promise that resolves to the loaded GIF data.
 */
export const loadSingleGif = async (id) => {
  const response = await fetch(getIdUrl(id));
  if (response.ok) {
    const result = await response.json();

    return result.data;
  } else {
    return;
  }
};
