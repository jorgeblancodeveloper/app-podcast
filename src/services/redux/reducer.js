import { UPDATE_PODCAST_LIST } from "./actions";

export const INITIAL_STATE = {
    podcastList: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
