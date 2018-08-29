import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
});

export default rootReducer;
