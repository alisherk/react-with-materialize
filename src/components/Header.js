import React, { Component } from 'react';
import M from 'materialize-css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs);
    const tooltips = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltips);
    const scrollspys = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspys);
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  }

  render() {
    return (
      <div>
        <header>
          <div className='navbar-fixed'>
            <nav className='nav-wrapper black'>
              <div className='container'>
                <NavLink
                  to='/'
                  className='brand-logo left'
                >
                  Surve
                </NavLink>
                <span
                  className='sidenav-trigger hide-on-med-and-up right'
                  data-target='mobile-menu'
                >
                  <i className='material-icons'> menu </i>
                </span>
                <ul
                  className='hide-on-med-and-down right'
                  style={{ fontSize: '14px' }}
                >
                  <strong>
                    <li>
                      <a href='#photos'> Examples </a>
                    </li>
                    <li>
                      <a href='#services'> Services </a>
                    </li>
                    <li>
                      <a href='#contacts'> Contact </a>
                    </li>
                  </strong>
                  <li>
                    <a
                      href='#terms'
                      className='btn-floating modal-trigger btn-medium grey darken-3 tooltipped'
                      data-tooltip='Login in here'
                    >
                      <span style={{ margin: '2px' }}>Login</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <ul className='sidenav grey lighten-2' id='mobile-menu'>
            <li>
              <a href='#services'> Services </a>
            </li>
            <li>
              <a href='#photos'> Examples </a>
            </li>
            <li>
              <a href='#contacts'> Contact </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
