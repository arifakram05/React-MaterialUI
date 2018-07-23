
import { FETCH_ALL_IDEAS } from '../actions/action_ideas'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_IDEAS:
      return action.payload;
    default:
      // do nothing
  }
  return state;
}
