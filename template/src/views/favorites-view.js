import { toGifSimple } from './trending-view.js';

export const toFavoritesView = (gifs) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${gifs.map(toGifSimple ).join('\n') || '<p>Add some movies to favorites to see them here.</p>'}
  </div>
</div>
`;
