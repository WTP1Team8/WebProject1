let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the favorites list and stores it in the local storage.
 * If the GIF ID is already in the favorites list, it will not be added again.
 *
 * @param {string} gifId - The ID of the GIF to be added to favorites.
 * @returns {void}
 */
export const addFavorite = (gifId) => {
  if (favorites.find((id) => id === gifId)) {
    // Movie has already been added to favorites
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a favorite GIF from the favorites list and updates the local storage.
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter((id) => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the favorites array.
 *
 * @returns {Array} The favorites array.
 */
export const getFavorites = () => [...favorites];
