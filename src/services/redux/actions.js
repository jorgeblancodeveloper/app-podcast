export const SET_PODCAST_LIST = "SET_PODCAST_LIST";
export const SET_FILTERED_LIST = "SET_FILTERED_LIST";
export const SET_SELECTED_PODCAST = "SET_SELECTED_PODCAST";
export const SET_EPISODE_LIST = "SET_EPISODE_LIST";
export const ADD_EPISODE_LIST = "ADD_EPISODE_LIST";
export const SET_SELECTED_EPISODE = "SET_SELECTED_EPISODE";
export const ADD_LOADING = "ADD_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";

export const setPodcastList = (data) => {
  return {
    type: SET_PODCAST_LIST,
    payload: data,
  };
};

export const setFilteredList = (data) => {
  return {
    type: SET_FILTERED_LIST,
    payload: data,
  };
};

export const setSelectedPodcast = (data) => {
  return {
    type: SET_SELECTED_PODCAST,
    payload: data,
  };
};
export const setEpisodeList = (data) => {
  return {
    type: SET_EPISODE_LIST,
    payload: data,
  };
};
export const addEpisodeList = (data) => {
  return {
    type: ADD_EPISODE_LIST,
    payload: data,
  };
};
export const addLoading = (data) => {
  return {
    type: ADD_LOADING,
    payload: data,
  };
};
export const removeLoading = (data) => {
  return {
    type: REMOVE_LOADING,
    payload: data,
  };
};
