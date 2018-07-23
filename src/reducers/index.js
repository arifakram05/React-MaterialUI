import { combineReducers } from 'redux';
import IdeasReducer from './reducer_ideas';

const rootReducer = combineReducers({
  ideas: IdeasReducer
});

export default rootReducer;
