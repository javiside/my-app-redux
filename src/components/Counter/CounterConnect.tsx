import { connect } from 'react-redux';
import Counter from './Counter';
import * as actionCreators from '../../store/actions/index';
import * as Type from './CounterTypings';

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
function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(Type.mapStateToProps, mapDispatchToProps, mergeProps)(
  Counter
);
