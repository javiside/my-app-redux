// Counter Reducer
export interface CounterReducerState {
    counter: number;
}
export interface ResultObject {
  id: string;
  value: string;
}
export interface CounterActionType {
  type: string;
  value: number;
}

// Result Reducer
export interface ResultReducerState {
  result: Array<ResultObject>;
}
export interface ResultActionType {
  type: string;
  element: string;
  id: string;
}
