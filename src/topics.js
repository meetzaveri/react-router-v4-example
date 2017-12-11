import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Topics extends React.Component{
  constructor(props){
    super(props);
    props={match:{}};
  }
  render() {
    return (
      <Router>
        <div>
          <h3>Topics </h3>
            <ul>
              <li><Link to={`${this.props.match.url}/render`}>rendering with react </Link></li>
              <li><Link to={`${this.props.match.url}/components`}>components and state </Link></li>
              <li><Link to={`${this.props.match.url}/props`}>props </Link></li>
            </ul>
            <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
            <Route exact path={this.props.match.url} render={() => (
              <h3>Please select a topic.</h3>
            )} />
        </div>
      </Router>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


export default Topics;