import { toTrendingRandomView } from './trending-view.js';
import { getRandomUrl } from '../common/constants.js';

/**
 * Renders the view for a random item.
 *
 * @param {Object} randomGif - The random GIF object.
 * @returns {Promise<string>} The HTML string representing the view.
 */
export const toRandomItemView = async (randomGif) => `

<div>
    <h2>You don't have a favorite GIF, here's a random one you may like:</h2>
    ${toTrendingRandomView(randomGif)}
</div>

`;

/**
 * Fetches a random GIF from the API.
 * @returns {Promise<Object>} A promise that resolves to the fetched GIF data.
 * @throws {Error} If the fetch request fails or the response is not OK.
 */
export const getRandomGIF = async () => {
  try {
    const response = await fetch(getRandomUrl());

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    return `Error fetching data: ${error.message}`;
  }
};
