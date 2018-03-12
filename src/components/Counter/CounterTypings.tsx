import { ResultObject } from '../../store/reducers/typings';
import { CounterReducerState, ResultReducerState } from '../../store/reducers/typings';
import { ACCountReturnType, ACResReturnType } from '../../store/actions/typings';
export { ResultObject } from '../../store/reducers/typings';

// Class Counter
interface LiTaragetType extends EventTarget {
  id: string;
}
export interface LiEventType extends React.MouseEvent<HTMLLIElement> {
  target: LiTaragetType;
}

export interface CounterProps {
  ctr: number;
  res: Array<ResultObject>;
}
export interface CounterDispatches {
    onClick:
    | React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
    | React.DetailedHTMLProps<
        React.LiHTMLAttributes<HTMLLIElement>,
        HTMLLIElement
      >;
  onInc: () => void;
  onDec: () => void;
  onAdd: () => void;
  onSub: () => void;
  onStore: (currCtr: string, id: string) => void;
  onRemove: (ev: LiEventType) => void;
}

export interface CounterState {
  fetching: boolean;
}

// MapStateToProps and MapDispatchToProps

export interface MergedPropsType {
  ctrReducer: CounterReducerState;
  resReducer: ResultReducerState;
}
export const mapStateToProps = (store: MergedPropsType) => {
  return {
    ctr: store.ctrReducer.counter,
    res: store.resReducer.result
  };
};

// Actions can be of Counter/Result type or an asynchronus function ↓ (using thunk, on this case setTimeOut) 
type MyDispatch = (Actions: ACCountReturnType |  ACResReturnType | Function ) => void;
export type MapDtoPType = (dispatch: MyDispatch) => object; 
