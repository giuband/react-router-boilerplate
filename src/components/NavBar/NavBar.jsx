import React from 'react';
import NavLink from '../NavLink';
require('../../stylesheet/components/NavBar.scss');

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar-container">
        <div className="navbar">
          <ul role="nav">
            <li>
              <NavLink to="/" onlyActiveOnIndex>
                <div>Logo</div>
              </NavLink>
            </li>
          </ul>
          <ul role="nav" className="navbar-right">
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
