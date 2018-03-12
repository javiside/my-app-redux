import * as actionConst from './actionConst';

// //////// TYPINGS/////////////////////TYPINGS/////////////////////
// Action Creators types (Counter)
export type ACCountReturnType = { type: string, value?: number };
type ACCountType = (value?: number) => ACCountReturnType;
// ////////END OF TYPINGS////////////////END OF TYPINGS///////////////

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