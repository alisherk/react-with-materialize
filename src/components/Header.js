import React, { Component } from 'react';
import M from 'materialize-css';

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
              <a href='#/' className='brand-logo left hide-on-med-and-down'>
               Surve
              </a>
              <span
                className='sidenav-trigger hide-on-med-and-up'
                data-target='mobile-menu'
              >
                <i className='material-icons'> menu </i>
              </span>
              <ul className='right hide-on-medium-and-down' style={{fontSize:'14px'}}>
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
                  <a href='#terms' className='btn-floating modal-trigger btn-medium grey darken-3 tooltipped'
                    data-tooltip='Login in here'>
                    <span style={{ margin: '2px' }}>Login</span>
                  </a>
                </li>
              </ul>
              <ul className='sidenav grey lighten-2' id='mobile-menu'>
                <li>
                  <a href='#services'> Services </a>
                </li>
                <li>
                  <a href='#contacts'> Contact </a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
