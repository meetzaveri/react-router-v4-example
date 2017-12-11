import React from 'react';
import { render } from 'react-dom';
import Home from './Home';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Home name="CodeSandbox" />
    <h2>Basic Routing</h2>
  </div>
);

render(<App />, document.getElementById('root'));
