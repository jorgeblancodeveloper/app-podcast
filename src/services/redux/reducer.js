import {
  SET_PODCAST_LIST,
  SET_FILTERED_LIST,
  SET_SELECTED_PODCAST,
  SET_EPISODE_LIST,
  ADD_EPISODE_LIST,
} from "./actions";

export const INITIAL_STATE = {
  filteredList: {},
  episodeList: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload,
      };

    case SET_FILTERED_LIST:
      return {
        ...state,
        filteredList: action.payload,
      };

    case SET_SELECTED_PODCAST:
      return {
        ...state,
        selectedPodcast: action.payload,
      };
    case SET_EPISODE_LIST:
      return {
        ...state,
        episodeList: action.payload,
      };
    case ADD_EPISODE_LIST:
      return {
        ...state,
        episodeList: { ...state.episodeList, ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
