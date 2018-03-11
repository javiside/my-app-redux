export interface CounterReducerState {
    counter: number;
}

export interface ResultObject {
  id: string;
  value: string;
}

export interface ResultReducerState {
  result: Array<ResultObject>;
}