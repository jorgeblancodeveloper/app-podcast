import {
  SET_PODCAST_LIST,
  SET_FILTERED_LIST,
  SET_SELECTED_PODCAST,
  SET_EPISODE_LIST,
  SET_LOADING
} from "./actions";

export const INITIAL_STATE = {
  filteredList: {},
  episodeList:[],
  isLoading:[]
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
      case SET_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
