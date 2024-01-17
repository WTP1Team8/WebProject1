export const HOME = 'home';

export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const ABOUT = 'about';

export const CONTAINER_SELECTOR = '#container';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'f8vCamsq9izeN75AajMzZs0gO6kvHgJf';

export const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g`;

export const getTrendingUrl = (limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=
${API_KEY}&limit=${limit}&offset=${offset}&rating=g`;
