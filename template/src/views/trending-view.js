import { renderFavoriteStatus } from "../events/favorites-events.js";
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
   ${trendingGifs.map(toTrendingItemView).join("")}
   <ul>
   </section>
   `;
};

export const toTrendingItemView = (trendingItem) => `
   <li class="gif-container">
       <a href="#/trending/${trendingItem.id}" >
           <img class="gif-link" data-gif-id="${trendingItem.id}" src="${
  trendingItem.images.fixed_width.url
}" alt="${trendingItem.title}">
       </a>
       <button class="like-button" id="likeButton">
       ${renderFavoriteStatus(trendingItem.id)}
       </button>
   </li>
`;

export const toTrendingRandomView = (trendingItem) => `
   <li class="gif-random">
       <a href="#/trending/${trendingItem.id}" >
           <img class="gif-link" data-gif-id="${trendingItem.id}" src="${
  trendingItem.images.fixed_width.url
}" alt="${trendingItem.title}">
       </a>
       <button class="random-button" id="random">
       ${renderFavoriteStatus(trendingItem.id)}
       </button>
   </li>
`;

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

//  <img src="${gifView.user.avatar_url}" alt="${gifView.user.username}"></img>

const toGifDetailed = (gif) => {
  if (gif.user && gif.user.username) {
    return `
    <div class="gif-detailed">
       <div class="poster-1">
          <p>Title:  ${gif.title}</p>
          <p>User: ${gif.user.username}</p>
          <p>Rating: ${gif.rating}</p>
          <p>Uploaded: ${gif.import_datetime}</p>
          <img src="${gif.user.avatar_url}" alt="${gif.user.username}" class="avatar" style="max-width: 100px;">
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
          <p>Source: <a href="${gif.source}" target="_blank">View Source</a></p>
         
       </div>
    </div>
 
 `;
  }
};


