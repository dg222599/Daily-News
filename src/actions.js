import { UPDATE_NEWS_ITEMS } from "./constants";

export const updateNews = (newsData) => ({
  type: UPDATE_NEWS_ITEMS,
  payload: newsData,
});
