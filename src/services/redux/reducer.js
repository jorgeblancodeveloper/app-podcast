import { UPDATE_PODCAST_LIST, UPDATE_FILTERED_LIST } from "./actions";

export const INITIAL_STATE = {
  podcastList: {},
  filteredList: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload,
      };

    case UPDATE_FILTERED_LIST:
      return {
        ...state,
        filteredList: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
