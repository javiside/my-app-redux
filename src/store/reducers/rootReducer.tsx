import { combineReducers } from 'redux';
import ctrReducer from './counterReducer';
import resReducer from './resultReducer';

const rootReducer = combineReducers({
  ctrReducer,
  resReducer
});

export default rootReducer;
