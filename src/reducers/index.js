import { combineReducers } from 'redux';
import Singers from './reducer_singers';

const rootReducer = combineReducers({
  singers: Singers,
});

export default rootReducer;
