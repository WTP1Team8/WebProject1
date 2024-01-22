import { toTrendingItemView } from "./trending-view.js";
import { getRandomUrl } from "../common/constants.js";

export const toRandomItemView = async (randomGif) => `

<div>
    <h2>You don't have a favorite GIF, here's a random one you may like:</h2>
    ${toTrendingItemView(randomGif)}
</div>

`

export const getRandomGIF = async () => {
  try {
    const response = await fetch(getRandomUrl());

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
;