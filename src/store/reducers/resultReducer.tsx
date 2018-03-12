import * as actionConst from '../../store/actions/actionConst';
import { updateObject } from '../utility';
import { ResultReducerState, ResultActionType } from './typings';

// Initial state/store for the results
const initialState: ResultReducerState = {
  result: []
};

// Changes the store to a new array with the previous values plus the new one
const storeEl = (state: ResultReducerState, action: ResultActionType) => {
  const updatedArray = state.result.concat({ id: action.id, value: action.element });
  return updateObject(state, { result: updatedArray });
};

// Changes the store to a new array with the previous values minus the removed one
const removeEl = (state: ResultReducerState, action: ResultActionType) => {
  const updatedArray = state.result.filter(el => +el.id !== +action.element);
  return updateObject(state, { result: updatedArray });
};

// Uses the above functions to update the results array
const resultReducer = (state: ResultReducerState = initialState, action: ResultActionType) => {
    switch (action.type) {
        case actionConst.STOREEL: return storeEl(state, action);
        case actionConst.REMOVEEL: return removeEl(state, action);
        default:
        return state;
    }
};
export default resultReducer;
