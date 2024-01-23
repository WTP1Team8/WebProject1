import { API_KEY } from "../common/constants.js";
import { q } from "../events/helpers.js";
import { toTrendingView } from "./trending-view.js";
export const toUploadNowView = (gifs) => `
<form id="formElem">
    Upload GIF: <input id="upl" type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  ${toTrendingView(gifs)}
`;

export const toUploadNowEmptyView = () => `
<form id="formElem">
Upload GIF: <input id="upl" type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  `;

export const getUploadGif = async () => {
  const file = q("#upl").files;
  const formData = new FormData();
  formData.append("file", file[0]);
  let response = await fetch(
    `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();

  return result.data.id;
};
