import {
  SET_PODCAST_LIST,
  SET_FILTERED_LIST,
  SET_SELECTED_PODCAST,
  SET_EPISODE_LIST,
  ADD_EPISODE_LIST,
  ADD_LOADING,
  REMOVE_LOADING,
} from "./actions";

export const INITIAL_STATE = {
  filteredList: {},
  episodeList: {},
  isLoading: [],
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
    case ADD_LOADING:
      return {
        ...state,
        isLoading: [... state.isLoading, ...action.payload],
      };
    case REMOVE_LOADING:
      return {
        ...state,
        isLoading: state.isLoading.filter((el) => el !== action.payload) ,
      };
    default:
      return state;
  }
};

export default reducer;
