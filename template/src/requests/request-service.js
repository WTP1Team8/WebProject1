
import { getTrendingUrl } from '../common/constants.js';
import { getCategories, getMoviesGeneralInfo, getMoviesFullInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';


/**
 * 
 * @returns {Promise<Array<{
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
* }>>}
 */
export const loadTrendingGifs = async() => {
  const response = await fetch(getTrendingUrl(31));
  const result = await response.json();
  
    return result.data
};

export const loadCategories = () => {
  const categories = getCategories();
  
  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId);

  return movies;
};

export const loadSingleMovie = (id) => {
  const movie = getMovieById(id);

  return movie;  
};

export const loadSearchMovies = (searchTerm = '') => {
  const movies = searchMovies(searchTerm);

  return movies;
};
