import { API_KEY } from '../common/constants.js';
import { q } from '../events/helpers.js';
import { toTrendingView } from './trending-view.js';

/**
 * Converts an array of GIFs into an HTML string representing the upload view.
 *
 * @param {Array} gifs - The array of GIFs.
 * @returns {string} The HTML string representing the upload view.
 */
export const toUploadNowView = (gifs) => `
<form id="formElem">
    Upload GIF: <input id="upl" type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  ${toTrendingView(gifs)}
`;

/**
 * Generates the HTML markup for the upload view form.
 *
 * @returns {string} The HTML markup for the upload view form.
 */
export const toUploadNowEmptyView = () => `
<form id="formElem">
Upload GIF: <input id="upl" type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  `;

/**
 * Retrieves the uploaded GIF ID from the Giphy API.
 * @returns {Promise<string>} The ID of the uploaded GIF.
 */
export const getUploadGif = async () => {
  const file = q('#upl').files;
  const formData = new FormData();
  formData.append('file', file[0]);
  let response = await fetch(
    `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
    {
      method: 'POST',
      body: formData,
    }
  );

  const result = await response.json();

  return result.data.id;
};
