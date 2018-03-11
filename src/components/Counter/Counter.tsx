import './Counter.css';

import * as React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import { CounterReducerState, ResultReducerState, ResultObject /* , ResultObject */ } from '../../types/index';
import { ACCountReturnType, ACResReturnType } from '../../types/ACTypes';

interface LiTaragetType extends EventTarget {
  id: string;
}
interface LiEventType extends React.MouseEvent<HTMLLIElement> {
  target: LiTaragetType;
}

interface CounterProps {
  ctr: number;
  res: Array<ResultObject>;
  onClick: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> |
    React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
  onInc: () => void;
  onDec: () => void;
  onAdd: () => void;
  onSub: () => void;
  onStore: (currCtr: string, id: string) => void;
  onRemove: (ev: LiEventType) => void;
}

interface CounterState {
  fetching: boolean;
}

class Counter extends React.Component< CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { fetching: false };
    this.addCounter = this.addCounter.bind(this);
    this.loaderr = this.loaderr.bind(this);
  }
  // Avoid using Arrow Functions on render method
  addCounter() {
    this.setState({ fetching: true });
    return this.props.onStore(this.props.ctr.toString(), new Date().getTime().toString());
  }
  loaderr() {
    return <div className="loader" />;
  }
  componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<CounterState>) {
    if (prevState.fetching) {
      this.setState({ fetching: false });
    }
  }
  render() {
    return (
      <div className={this.state.fetching ? 'disable' : ''}>
        <h1 className="COutput">Current Value: {this.props.ctr} </h1>
        <button className="CBtn" onClick={this.props.onInc}> Increment </button>
        <button className="CBtn" onClick={this.props.onDec} >Decrement </button>
        <button className="CBtn" onClick={this.props.onAdd}> Add 5 </button>
        <button className="CBtn" onClick={this.props.onSub}> Subtract 5 </button>
        <hr />
        <button onClick={this.addCounter}>
          Store Result
        </button>
        {
          this.state.fetching ? (
            <span> 
              <this.loaderr /> <strong> "Server"...</strong>
            </span>
          ) : null
        }
        <ul className="CUl">
          {this.props.res.map((el: ResultObject) => (
            <li id={el.id} key={el.id} className="CLi" onClick={this.props.onRemove}>
              {el.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

interface MergedPropsType {
  ctrReducer: CounterReducerState;
  resReducer: ResultReducerState;
}
const mapStateToProps = (store: MergedPropsType) => {
  return {
    ctr: store.ctrReducer.counter,
    res: store.resReducer.result
  };
};

// Actions can be of Counter/Result type or an asynchronus function ↓ (using thunk, on this case setTimeOut) 
type MyDispatch = (Actions: ACCountReturnType |  ACResReturnType | Function ) => void;
type MapDtoPType = (dispatch: MyDispatch) => object; 

const mapDispatchToProps: MapDtoPType = (dispatch) => {
  return {
    onInc: () => dispatch(actionCreators.incremet()),
    onDec: () => dispatch(actionCreators.decrement()),
    onAdd: () => dispatch(actionCreators.add(5)),
    onSub: () => dispatch(actionCreators.substract(5)),
    onStore: (element: string, id: string) => dispatch(actionCreators.storeEl(element, id)),
    onRemove: (ev: LiEventType) => dispatch(actionCreators.removeEl(ev.target.id))
  };
};

function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}
export default connect(mapStateToProps,  mapDispatchToProps, mergeProps)(Counter);