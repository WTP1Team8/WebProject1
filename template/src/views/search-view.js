import { toTrendingItemView } from "./trending-view.js";
import { EMPTY_HEART } from "../common/constants.js";
import { toTrendingView } from "./trending-view.js";
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
    <h1>Gifs found for "${searchTerm}":</h1>
    <div class="trending-gif">
    ${searchedGifs.map((gif) => toTrendingItemView(gif)).join("")}
    </div>
  </div>
  `;

/**
 *
 * @param {Object} searchedItem
 */
export const toSearchedItemView = (searchedItem) => `
<li>
    <a href="#/trending/${searchedItem.id}" >
        <img class="gif-link" data-movie-id="${searchedItem.id}" src="${searchedItem.images.fixed_width.url}" alt="${searchedItem.title}">
        
    </a>
    <button class="like-button" id="likeButton">
    <span>${EMPTY_HEART}</span>
</button>
</li>
`;

// GifbyId URL - `https://api.giphy.com/v1/gifs/${gif_id}?api_key=hn1LkoWv2wIkMKj670q5ad0SZ85dlOV&rating=g`
