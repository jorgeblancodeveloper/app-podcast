export const UPDATE_PODCAST_LIST = "UPDATE_PODCAST_LIST";
export const UPDATE_FILTERED_LIST = "UPDATE_FILTERED_LIST";
export const updatePodcastList = (data) => {
  return {
    type: UPDATE_PODCAST_LIST,
    payload: data,
  };
};

export const updateFilteredList = (data) => {
  return {
    type: UPDATE_FILTERED_LIST,
    payload: data,
  };
};
