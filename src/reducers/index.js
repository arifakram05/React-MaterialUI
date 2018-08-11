import { combineReducers } from 'redux';
import IdeasReducer from './reducer_ideas';
import GroupsReducer from './reducer_groups';

const rootReducer = combineReducers({
  ideas: IdeasReducer,
  groups: GroupsReducer
});

export default rootReducer;
