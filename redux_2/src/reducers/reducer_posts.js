import { FETCH_POSTS, FETCH_POST, DELETE_POSTS } from "../actions";
import _ from "lodash";
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      //   const post = action.payload.data;
      //   const newState = { ...state };
      //   newState[post.id] = post;
      //   return newState;

      // key interpolaction
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case DELETE_POSTS:
      return _omit(state, action.payload);
    default:
      return state;
  }
}
