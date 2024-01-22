import { getTrendingUrl, getSearchUrl,getIdUrl } from '../common/constants.js';
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
export const loadTrendingGifs = async() => {
  const response = await fetch(getTrendingUrl(36));
  const result = await response.json();
  
    return result.data
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
  // const response = await fetch(getSearchUrl(query));
  // const result = await response.json();
  
  // return result.data

  try {
    const response = await fetch(getSearchUrl(query));

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    // Handle the error or rethrow it if necessary
    throw error;
  }
};


export const loadSingleGif = async (id) => {
  const response = await fetch(getIdUrl(id));
  const result = await response.json();

  return result.data;
};



export const loadUploadedGifs = () => {

  return
}

