export const HOME = "home";

export const TRENDING = "trending";

export const FAVORITES = "favorites";

export const ABOUT = "about";

export const CONTAINER_SELECTOR = "#container";

export const FULL_HEART = "❤";

export const EMPTY_HEART = "♡";

export const API_KEY = "8hn1LkoWv2wIkMKj670q5ad0SZ85dlOV";

export const getTrendingUrl = (
  limit = 25,
  offset = 0
) => `https://api.giphy.com/v1/gifs/trending?api_key=
${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;

export const getSearchUrl = (
  q,
  limit = 25,
  offset = 0
) => `https://api.giphy.com/v1/gifs/search?api_key=
${API_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g`;

export const getIdUrl = (id) =>
  `https://api.giphy.com/v1/gifs/${id}?api_key=8hn1LkoWv2wIkMKj670q5ad0SZ85dlOV&rating=g`;
