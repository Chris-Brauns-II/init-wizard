import React, { Component } from 'react';

import store from "./Redux/store";
import { addStream } from "./Redux/Actions/modelActions";

import Button from '@material-ui/core/Button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Data Streaming Startup Wizard!</h1>
        </header>
        <p className="App-intro">
          To get started, specify the number of topics, producers, and consumers.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="add-element">
                  <Button variant="outlined" color="primary">Add a Stream</Button>
                </div>
              </td>
              <td>
                <div className="add-element">
                  <Button variant="outlined" color="primary">Add a Stream</Button>
                </div>
              </td>
              <td>
                <div className="add-element">
                  <Button variant="outlined" color="primary">Add a Stream</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

store.dispatch(addStream('stream1'));
store.dispatch(addStream('stream2'));
