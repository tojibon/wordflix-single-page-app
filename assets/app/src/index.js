import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * NOTE: This imports the entire Ant Design CSS, which is overkill. . .I would recommend only importing the parts
 * that you actually need, but this is fast to get up and running.
 */
import 'antd/dist/antd.css';
import './styles/style.css';

class HomePage extends Component {
  render() {
    return(
      <div>
        <h1>WordFlix</h1>
        <h2>Your favorite super-powered Single Page App for browsing Super Hero Movies!</h2>
        <a href="#0">Explore Films</a>
      </div>
    )
  }
}

/**
 * This is the only component we actually render directly to the DOM!
 */
class App extends Component {
  render() {
    return(
      <HomePage />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
