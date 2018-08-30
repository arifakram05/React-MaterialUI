import axios from 'axios';
import { URL } from '../constants/constants'

// exporting action type of an action is kind of necessary to keep it consistent with action creators and reducers
// i.e. for each action there will a corresponding reducer that handles the particular action type.
export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  const request = axios.get(URL); // This needs ReduxPromise to resolve the promise. Here, we are not going sagas route unlike users action
  console.log('request is ', request)

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
