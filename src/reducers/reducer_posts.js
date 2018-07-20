import { FETCH_POSTS } from '../actions/action_posts'

export default function(state = [], action) {
  // console.log('action received ', action, '. state is ', state);
  switch (action.type) {
    case FETCH_POSTS:
      console.log('Posts received: ', action.payload.data);
      // the below statement returns a new state, which is an array
      // ... means that variable, state is an array, so flaten out the array
      return [action.payload.data, ...state];
    default:

  }
  return state;
}
