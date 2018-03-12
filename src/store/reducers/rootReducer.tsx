import { combineReducers } from 'redux';
import ctrReducer from './counterReducer';
import resReducer from './resultReducer';

// Using the combineReducers method to merge the reducers into one
const rootReducer = combineReducers({
  ctrReducer,
  resReducer
});

export default rootReducer;
