import React from 'react';
import NavBar from '../NavBar';
require('normalize.css');
require('../../stylesheet/components/App.scss');

const propTypes = {
  children: React.PropTypes.node,
};

class App extends React.Component {
  componentWillMount() {
  }

  render() {
    const content = this.props.children;
    return (
      <div className="app-container">
        <NavBar />
        <div className="app-content">
          {content}
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
