/**
 * Returns the HTML markup for the home view.
 * 
 * @returns {string} The HTML markup for the home view.
 */
export const toHomeView = () => `
<div id="home">
  <h1 style="color:#62259F;">Giphy</h1>
  <div class="content">
    <p style="color:white;">Single page app</p>
    <ul>
      <li style="color:#FFF35C;">Browse trending giphy's</li>
      <li style="color:#00FF99;">Add and remove giphy from favorites</li>
      <li style="color:#FF6666;">Search for giphy by title</li>
      <li style="color:#00CCFF;">Upload giphy</li>
    </ul>
  </div>
</div>
`;
