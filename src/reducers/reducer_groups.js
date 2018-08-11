import { FETCH_ALL_GROUPS } from '../actions/action_groups'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_GROUPS:
      console.log('groups: ', action);
      return action.payload;
    default:
      // do nothing
  }
  return state;
}
