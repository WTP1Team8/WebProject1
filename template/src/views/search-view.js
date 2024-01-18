
/**
 * 
 * @param {Array<{
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
* }>} searchedGifs 
 * @param {string} searchTerm 
 */
export const toSearchView = (searchedGifs, searchTerm) => `
  <div id="movies">
    <h1>Movies found for "${searchTerm}":</h1>
    <div class="content">
    ${searchedGifs.map((gif) => toSearchedItemView(gif)).join('')}
    </div>
  </div>
  `

/**
 * 
 * @param {Object} searchedItem 
*/
export const toSearchedItemView = (searchedItem) => `
<li>
    <a href="#/trending/${searchedItem.id}">
    <img src="${searchedItem.images.fixed_width.url}" alt="${searchedItem.title}">
    </a>

</li>
`

// GifbyId URL - `https://api.giphy.com/v1/gifs/${gif_id}?api_key=hn1LkoWv2wIkMKj670q5ad0SZ85dlOV&rating=g`