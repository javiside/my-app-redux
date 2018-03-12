import './Counter.css';
import * as React from 'react';
import * as Type from './CounterTypings';

// Class Counter Component
export default class Counter extends React.Component<Type.CounterProps & Type.CounterDispatches, Type.CounterState> {
  constructor(props: Type.CounterProps & Type.CounterDispatches) {
    super(props);
    this.state = { fetching: false };
    this.addCounter = this.addCounter.bind(this);
    this.ShowHideLoader = this.ShowHideLoader.bind(this);
  }
  
  // Avoid using Arrow Functions on render method
  addCounter() {
    this.setState({ fetching: true });
    return this.props.onStore(this.props.ctr.toString(), new Date().getTime().toString());
  }

  ShowHideLoader() {
    return <div className="loader" />;
  }
  
  componentDidUpdate(prevProps: Readonly<Type.CounterProps>, prevState: Readonly<Type.CounterState>) {
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
              <this.ShowHideLoader /> <strong> "Server"...</strong>
            </span>
          ) : null
        }
        <ul className="CUl">
          {this.props.res.map((el: Type.ResultObject) => (
            <li id={el.id} key={el.id} className="CLi" onClick={this.props.onRemove}>
              {el.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}