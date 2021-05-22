import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
} from "../actions/types";
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  // const { experience, education } = state.profile;
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
      };
    default:
      return state;
  }
};
