import { FAVORITES, HOME, EMPTY_HEART } from "./common/constants.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { q } from "./events/helpers.js";
import { loadPage, renderCategory } from "./events/navigation-events.js";
import { renderSearchItems } from "./events/search-events.js";
import { renderGifDetails } from "./events/navigation-events.js";
import { removeFavorite } from "./data/favorites.js";

document.addEventListener("DOMContentLoaded", () => {
  // add global listener
  document.addEventListener("click", (event) => {
    // nav events
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
    }

    // show category events
    if (event.target.classList.contains("view-category-btn")) {
      renderCategory(+event.target.getAttribute("data-category-id"));
    }

    // show movie events
    if (event.target.classList.contains("gif-link")) {
      renderGifDetails(event.target.getAttribute("data-gif-id"));
    }

    // toggle favorite event
    if (event.target.classList.contains("favorite")) {
      console.log(event.target.getAttribute("data-gif-id"));
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
    }

    if (
      event.target.classList.contains("favorite") &&
      q("#favorites").classList.contains("active")
    ) {
      const heartSpan = event.target;
      removeFavorite(heartSpan.getAttribute("data-gif-id"));
      heartSpan.classList.remove("active");
      heartSpan.innerHTML = EMPTY_HEART;
      loadPage(FAVORITES);
    }
  });

  // search events
  q("input#search").addEventListener("input", (e) => {
    renderSearchItems(e.target.value);
  });

  loadPage(HOME);
});
