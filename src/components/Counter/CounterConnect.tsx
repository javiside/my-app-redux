import { connect } from 'react-redux';
import Counter, { LiEventType } from './Counter';
import * as actionCreators from '../../store/actions/index';
import { CounterReducerState } from '../../store/reducers/counterReducer';
import { ResultReducerState } from '../../store/reducers/resultReducer';
import { ACCountReturnType } from '../../store/actions/counter';
import { ACResReturnType } from '../../store/actions/results';

// //////// TYPINGS/////////////////////TYPINGS////////////////////////TYPINGS//////////////////////////////
// //////// TYPINGS/////////////////////TYPINGS////////////////////////TYPINGS//////////////////////////////

// MapStateToProps interface
interface MergedPropsType {
  ctrReducer: CounterReducerState;
  resReducer: ResultReducerState;
}

// Actions can be of Counter/Result type or an asynchronus function ↓ (using thunk, in this case setTimeOut) 
type MyDispatch = (Actions: ACCountReturnType |  ACResReturnType | Function ) => void;
type MapDtoPType = (dispatch: MyDispatch) => object; 

// ////////END OF TYPINGS////////////////END OF TYPINGS//////////////////END OF TYPINGS////////////////////////
// ////////END OF TYPINGS////////////////END OF TYPINGS//////////////////END OF TYPINGS////////////////////////

// mapStateToProps holds the two reducers (and their respective stores/states)
const mapStateToProps = (store: MergedPropsType) => {
  return {
    ctr: store.ctrReducer.counter,
    res: store.resReducer.result
  };
};

// mapDispatchToProps binds the component actions with the action creators
const mapDispatchToProps: MapDtoPType = dispatch => {
  return {
    onInc: () => dispatch(actionCreators.incremet()),
    onDec: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add(5)),
    onSub: () => dispatch(actionCreators.substract(5)),
    onStore: (element: string, id: string) => dispatch(actionCreators.storeEl(element, id)),
    onRemove: (ev: LiEventType) => dispatch(actionCreators.removeEl(ev.target.id))
  };
};

// Exporting the new Counter (Injected props and dispatches)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
