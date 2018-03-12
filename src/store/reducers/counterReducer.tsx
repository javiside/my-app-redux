import * as actionConst from '../../store/actions/actionConst';
import { updateObject } from '../utility';
import { CounterReducerState, CounterActionType } from './typings';

const initialState: CounterReducerState = {
    counter: 0
};

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
