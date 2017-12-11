import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './about';
import Topics from './topics';

class Home extends React.Component{
  constructor(props) {
    super(props);
    props = { match: {} };
  }
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr/>

          <Route exact path="/about" component={About}/>
          <Route exact path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default Home;
