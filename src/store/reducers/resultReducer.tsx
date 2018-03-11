import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../utility';
import { ResultReducerState } from '../../types/index';

const initialState: ResultReducerState = {
  result: []
};

interface ActionType {
  type: string;
  element: string;
  id: string;
}

const storeEl = (state: ResultReducerState, action: ActionType) => {
  const updatedArray = state.result.concat({ id: action.id, value: action.element });
  return updateObject(state, { result: updatedArray });
};

const removeEl = (state: ResultReducerState, action: ActionType) => {
  const updatedArray = state.result.filter(el => +el.id !== +action.element);
  return updateObject(state, { result: updatedArray });
};

const resultReducer = (state: ResultReducerState = initialState, action: ActionType) => {
    switch (action.type) {
        case actionTypes.STOREEL: return storeEl(state, action);
        case actionTypes.REMOVEEL: return removeEl(state, action);
        default:
        return state;
    }
};
export default resultReducer;
