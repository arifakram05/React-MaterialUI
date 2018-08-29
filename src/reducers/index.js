import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import TodosReducer from './reducer_todos';

const rootReducer = combineReducers({
  posts: PostsReducer,
  todos: TodosReducer,
});

export default rootReducer;
