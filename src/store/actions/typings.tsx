// Action Creators types (Counter)
export type ACCountReturnType = { type: string, value?: number };
export type ACCountType = (value?: number) => ACCountReturnType;

// Action Creators types (Result)
export interface ACResReturnType { type: string;  element: string;  id?: string; }
export type ACResType = (element: string, id?: string) => ACResReturnType;
export type ThunkType = (element: string,  id: string) => (dispatch: Function) => void;
