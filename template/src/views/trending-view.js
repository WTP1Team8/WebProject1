
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

const toTrendingItemView = (trendingItem) => `
   <li>
       <a href="#/trending/${trendingItem.id}" >
           <img class="gif-link" data-movie-id="${trendingItem.id}" src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
       </a>
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
    <div class="movie-detailed">
       <div class="poster">
          <p>Title:  ${gif.title}</p>
          <p>User: ${gif.user.username}</p>
          <p>Rating: ${gif.rating}</p>
          <p>Uploaded: ${gif.import_datetime}</p>
          <p>Avatar: <img src="${gif.user.avatar_url}" alt="${gif.user.username}" class="avatar" style="max-width: 100px;">
       </div>
    </div>
 
 `;
   } else {
     return `
    <div class="movie-detailed">
       <div class="poster">
          <p>Title:  ${gif.title}</p>
          <p>Rating: ${gif.rating}</p>
          <p>Uploaded: ${gif.import_datetime}</p>
          <p>Source: ${gif.source}</p>
       </div>
    </div>
 
 `;
   }
 };
