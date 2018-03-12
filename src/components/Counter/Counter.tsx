import './Counter.css';
import * as React from 'react';
import { ResultObject } from '../../store/reducers/resultReducer';

// //////// TYPINGS/////////////////////TYPINGS////////////////////////TYPINGS/////
// Class Counter
interface LiTaragetType extends EventTarget {
  id: string;
}
export interface LiEventType extends React.MouseEvent<HTMLLIElement> {
  target: LiTaragetType;
}

// COMPONENT PROPS:
interface CounterProps {
  ctr: number;
  res: Array<ResultObject>;
}

// COMPONENT DISPATCHES: (Detached dispatches from props)
interface CounterDispatches {
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

// COMPONENT STATE: Using a local component state to represent the fetching status
interface CounterState {
  fetching: boolean;
}
// ////////END OF TYPINGS////////////////END OF TYPINGS//////////////////END OF TYPINGS////////////////////////

// Class Counter Component (props, dispatches and state are on the typings file)
export default class Counter extends React.Component<CounterProps & CounterDispatches, CounterState> {
  constructor(props: CounterProps & CounterDispatches) {
    super(props);
    this.state = { fetching: false };
    this.addCounter = this.addCounter.bind(this);
  }
  
  // Avoid using Arrow Functions on render method
  addCounter() {
    this.setState({ fetching: true });
    return this.props.onStore(this.props.ctr.toString(), new Date().getTime().toString());
  }
  // Remove loader when the "server" responds
  componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<CounterState>) {
    if (prevState.fetching) {
      this.setState({ fetching: false });
    }
  }
  // Component: H1 holds the counter, 4 action buttons, 1 button to store the values and the Li list of stored values
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
              <div className="loader"/> <strong> "Server"...</strong>
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