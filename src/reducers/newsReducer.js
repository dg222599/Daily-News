import { UPDATE_NEWS_ITEMS } from "../constants";

const initialState = {
  newsData: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEWS_ITEMS:
      return {
        newsData: action.payload,
      };
    default:
      return state;
  }
};
