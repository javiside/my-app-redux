import * as actionTypes from './actionTypes';
import { ACCountType } from '../../types/ACTypes';

// Action Creators for the Counter
export const incremet: ACCountType = () => {
    return {
        type: actionTypes.INC
    };
};
export const decrement: ACCountType = () => {
    return {
        type: actionTypes.DEC
    };
};
export const add: ACCountType = (value: number) => {
    return {
        type: actionTypes.ADD,
        value: value
    };
};
export const substract: ACCountType = (value: number) => {
    return {
        type: actionTypes.SUB,
        value: value
    };
};