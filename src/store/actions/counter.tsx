import * as actionConst from './actionConst';
import { ACCountType } from './typings';

// Action Creators for the Counter
export const incremet: ACCountType = () => {
    return {
        type: actionConst.INC
    };
};
export const decrement: ACCountType = () => {
    return {
        type: actionConst.DEC
    };
};
export const add: ACCountType = (value: number) => {
    return {
        type: actionConst.ADD,
        value: value
    };
};
export const substract: ACCountType = (value: number) => {
    return {
        type: actionConst.SUB,
        value: value
    };
};