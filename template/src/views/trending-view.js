import { renderFavoriteStatus } from '../events/favorites-events.js';
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
 * }>} trendingGifs
 */
export const toTrendingView = (trendingGifs) => {
  return `
   <section class="trending">
   <h2 id="text-trending"> Trending Giphy &#8482</h2>
   <ul class="trending-gif">
   ${trendingGifs.map(toTrendingItemView).join('')}
   <ul>
   </section>
   `;
};

/**
 * Converts a trending item object into a trending item view HTML string.
 *
 * @param {Object} trendingItem - The trending item object.
 * @returns {string} The HTML string representing the trending item view.
 */
export const toTrendingItemView = (trendingItem) => `
   <li class="gif-container">
       <a href="#/trending/${trendingItem}" >
           <img class="gif-link" data-gif-id="${trendingItem.id}" src="${
  trendingItem.images.fixed_width.url
}" alt="${trendingItem.title}">
       </a>
       <button class="like-button" id="likeButton">
       ${renderFavoriteStatus(trendingItem.id)}
       </button>
   </li>
`;

/**
 * Converts a trending item into a trending random view HTML string.
 *
 * @param {Object} trendingItem - The trending item object.
 * @returns {string} The HTML string representing the trending random view.
 */
export const toTrendingRandomView = (trendingItem) => `
   <li class="gif-random">
       <a href="#/trending/${trendingItem}" >
           <img class="gif-link" data-gif-id="${trendingItem.id}" src="${
  trendingItem.images.fixed_width.url
}" alt="${trendingItem.title}">
       </a>
       <button class="random-button" id="random">
       ${renderFavoriteStatus(trendingItem.id)}
       </button>
   </li>
`;

/**
 * Converts a gif view object into a single gif view HTML string.
 *
 * @param {Object} gifView - The gif view object.
 * @returns {string} The HTML string representing the single gif view.
 */
export const toSingleGifView = (gifView) => {
  return `
          <div class="gif-detailed">
             <div class="poster">
                <img  src="${gifView.images.fixed_width.url}" alt="${
  gifView.title
}" class="single">
             </div>
             <div class="movie-info">
                ${toGifDetailed(gifView)}
             </div>
          </div>
       `;
};

/**
 * Converts a gif object into a detailed HTML representation.
 *
 * @param {Object} gif - The gif object to convert.
 * @returns {string} - The HTML representation of the gif.
 */
const toGifDetailed = (gif) => {
  if (gif.user && gif.user.username) {
    return `
    <div class="gif-detailed">
       <div class="poster-1">
          <p>Title:  ${gif.title}</p>
          <p>User: ${gif.user.username}</p>
          <p>Rating: ${gif.rating}</p>
          <p>Uploaded: ${gif.import_datetime}</p>
          <p>Favorite ${renderFavoriteStatus(gif.id)}</p><br>
          <img src="${gif.user.avatar_url}" alt="${
  gif.user.username
}" class="avatar" style="max-width: 100px;">
       </div>
    </div>
 
 `;
  } else {
    return `
    <div class="gif-detailed">
       <div class="poster-2">
          <p>Title:  ${gif.title}</p>
          <p>User: unknown &#128577</p>
          <p>Rating: ${gif.rating}</p>
          <p>Uploaded: ${gif.import_datetime}</p>
          <p>Favorite${renderFavoriteStatus(gif.id)}</p>
          <p>Source: <a href="${
  gif.source
}" target="_blank" style="color: #FFF35C;">View Source</a></p>
         
       </div>
    </div>
 
 `;
  }
};
