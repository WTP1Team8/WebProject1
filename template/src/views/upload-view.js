import { API_KEY, USERNAME } from "../common/constants.js";
export const toUploadNowView = (gifs) => `
<form id="formElem">
    Upload GIF: <input type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  ${toTrendingView(gifs)}
`;

export const toUploadNowEmptyView = () => `
<form id="formElem">
Upload GIF: <input type="file" name="file" accept="image/*">
    <input type="submit" class='submit-upload-button'>
  </form>
  `;

export const getUploadGif = async () => {
  const formData = new FormData(formElem);
  formData.append("api_key", API_KEY);
  formData.append("username", USERNAME);

  let response = await fetch("https://upload.giphy.com/v1/gifs", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return result.data;
};
