
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
   <h2>Trending</h2>
   <ul>
   ${trendingGifs.map(toTrendingItemView).join('')}
   <ul>
   </section>
   `;

};

const toTrendingItemView = (trendingItem) => `
   <li>
       <a href="#/trending/${trendingItem.id}">
       <button class="view-movie-btn" data-movie-id="${trendingItem.id}">View details</button>
       <img src="${trendingItem.images.fixed_width.url}" alt="${trendingItem.title}">
       </a>

   </li>
   `


   export const toSingleGifView = (gifView) => {
      return `
         <div class="gif-detailed">
            <div class="poster">
               <p id='title'>Title: ${gifView.title}</p><br>
               <img src="${gifView.images.fixed_width.url}" alt="${gifView.title}" class="single">
            </div>
            <div class="movie-info">
               ${toGifDetailed(gifView)}
            </div>
         </div>
      `;
   };
    
   //  <img src="${gifView.user.avatar_url}" alt="${gifView.user.username}"></img>

const toGifDetailed = (gif) => `
<div class="movie-detailed">
   <div class="poster">
      <p =>Rating: ${gif.rating}</p>
      <p>User: ${gif.user.username}</p>
      <img src="${gif.user.avatar_url}" alt="${gif.user.username}" class="avatar" style="max-width: 100px;">
   </div>
</div>
`;