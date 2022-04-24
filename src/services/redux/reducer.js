import {
  SET_PODCAST_LIST,
  SET_FILTERED_LIST,
  SET_SELECTED_PODCAST,
  SET_SELECTED_EPISODE,
  SET_EPISODE_LIST,
} from "./actions";

export const INITIAL_STATE = {
  podcastList: {},
  filteredList: {},
  selectedPodcast: {},
  episodeList:[],
  selectedEpisodeId: "",
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
    case SET_SELECTED_EPISODE:
      return {
        ...state,
        selectedEpisodeId: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
