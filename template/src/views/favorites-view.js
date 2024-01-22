import { toTrendingItemView } from "./trending-view.js";

export const toFavoritesView = (gifs) => `
<section class="trending">
<h2 id="text-trending"> Trending Giphy &#8482</h2>
<ul class="trending-gif">
${gifs.map(toTrendingItemView).join("") || '<p>Add some gifs to favorites to see them here.</p>'}
<ul>
</section>
`;
