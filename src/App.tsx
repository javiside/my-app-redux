import './globalStyle/App.css';

import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CounterConnected from './components/Counter/CounterConnect';

// Using react-router to show the Counter Component on every route
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          <BrowserRouter>
            <Route path="*" component={CounterConnected} />
          </BrowserRouter>
        }
      </div>
    );
  }
}

export default App;
