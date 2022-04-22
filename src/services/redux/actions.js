export const UPDATE_PODCAST_LIST = "UPDATE_PODCAST_LIST";

export const updatePodcastLlist = (data) => {
  return {
    type: UPDATE_PODCAST_LIST,
    payload: data,
  };
};
