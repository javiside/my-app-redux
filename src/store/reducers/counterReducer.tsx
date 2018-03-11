import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../utility';
import { CounterReducerState } from '../../types/index';

const initialState: CounterReducerState = {
    counter: 0
};

interface CounterAction {
    type: string;
    value: number;
}

const counterReducer = (state= initialState, action: CounterAction) => {
    switch (action.type) {
        case actionTypes.INC: return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DEC: return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD: return updateObject(state, {counter: state.counter + action.value});
        case actionTypes.SUB: return updateObject(state, {counter: state.counter - action.value});
        default: return state;
    }
};
export default counterReducer;
