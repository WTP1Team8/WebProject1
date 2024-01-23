let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID to the uploaded array and stores it in the local storage.
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUploaded = (gifId) => {

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Removes the specified GIF ID from the 'uploaded' array and updates the localStorage accordingly.
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeUploaded = (gifId) => {
  uploaded = uploaded.filter((id) => id !== gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Retrieves the uploaded data.
 * @returns {Array} The uploaded data.
 */
export const getUploaded = () => [...uploaded];