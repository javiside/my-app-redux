import { connect } from 'react-redux';
import Counter from './Counter';
import * as actionCreators from '../../store/actions/index';
import * as Type from './typings';

// mapStateToProps holds the two reducers (and their respective stores/states)
export const mapStateToProps = (store: Type.MergedPropsType) => {
  return {
    ctr: store.ctrReducer.counter,
    res: store.resReducer.result
  };
};

// 
const mapDispatchToProps: Type.MapDtoPType = dispatch => {
  return {
    onInc: () => dispatch(actionCreators.incremet()),
    onDec: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add(5)),
    onSub: () => dispatch(actionCreators.substract(5)),
    onStore: (element: string, id: string) => dispatch(actionCreators.storeEl(element, id)),
    onRemove: (ev: Type.LiEventType) => dispatch(actionCreators.removeEl(ev.target.id))
  };
};

// Same as react-redux mergeProps function; Merging the properties to make the type checker happy 
function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

// Exporting the new Counter (Injected props and dispatches)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Counter);
