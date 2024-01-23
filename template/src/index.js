import { FAVORITES, HOME, EMPTY_HEART, UPLOADED } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q } from "./events/helpers.js";
import { loadPage } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { renderGifDetails } from "./events/navigation-events.js";
import { getUploadGif } from "./views/upload-view.js";

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  document.addEventListener("click", (event) => {
    // nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }

    // show movie events
    if (event.target.classList.contains("gif-link")) {
      renderGifDetails(event.target.getAttribute("data-gif-id"));
    }

    // toggle favorite event
    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));

      if (q("#favorites").classList.contains("active")) {
        loadPage(FAVORITES);
      }
    }

    if(event.target.classList.contains('submit-upload-button')) {
      event.preventDefault();
      getUploadGif();
      loadPage(UPLOADED);
    };
  });

  // search events
  q("input#search").addEventListener("input", (e) => {
    renderSearchItems(e.target.value);
  });



  loadPage(HOME);
});
