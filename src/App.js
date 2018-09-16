import React, { Component } from 'react';
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
                <div>
                  <h2>Stream Manager</h2>
                  <button>Add a Stream</button>
                </div>
              </td>
              <td>
                <div>
                  <h2>Producer Manager</h2>
                  <button>Add a Stream</button>
                </div>
              </td>
              <td>
                <div>
                  <h2>Consumer Manager</h2>
                  <button>Add a Stream</button>
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
