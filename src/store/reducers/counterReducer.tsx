import * as actionConst from '../../store/actions/actionConst';
import { updateObject } from '../utility';

// //////// TYPINGS/////////////////////TYPINGS/////////////////////
// Counter Reducer
export interface CounterReducerState {
    counter: number;
}
interface CounterActionType {
  type: string;
  value: number;
}
// ////////END OF TYPINGS////////////////END OF TYPINGS///////////////

// Initial state/store for the counter
const initialState: CounterReducerState = {
    counter: 0
};

// Reducer to update the counter, may or may not use a payload to update the counter's value
const counterReducer = (state= initialState, action: CounterActionType) => {
    switch (action.type) {
        case actionConst.INC: return updateObject(state, {counter: state.counter + 1});
        case actionConst.DEC: return updateObject(state, {counter: state.counter - 1});
        case actionConst.ADD: return updateObject(state, {counter: state.counter + action.value});
        case actionConst.SUB: return updateObject(state, {counter: state.counter - action.value});
        default: return state;
    }
};
export default counterReducer;
