import * as actionConst from '../../store/actions/actionConst';
import { updateObject } from '../utility';
import { ResultReducerState, ResultActionType } from './typings';

const initialState: ResultReducerState = {
  result: []
};

const storeEl = (state: ResultReducerState, action: ResultActionType) => {
  const updatedArray = state.result.concat({ id: action.id, value: action.element });
  return updateObject(state, { result: updatedArray });
};

const removeEl = (state: ResultReducerState, action: ResultActionType) => {
  const updatedArray = state.result.filter(el => +el.id !== +action.element);
  return updateObject(state, { result: updatedArray });
};

const resultReducer = (state: ResultReducerState = initialState, action: ResultActionType) => {
    switch (action.type) {
        case actionConst.STOREEL: return storeEl(state, action);
        case actionConst.REMOVEEL: return removeEl(state, action);
        default:
        return state;
    }
};
export default resultReducer;
