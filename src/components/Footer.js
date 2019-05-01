import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className='page-footer grey darken-4'>
        <div className='container'>
          <div className='row'>
            <div className='col s12 l6'>
            <h4> About me </h4>
              <p>
                Proin check out this crunk. Boofron sizzle pizzle diam et massa
                funky fresh pellentesque. In izzle erat. Vivamizzle things
                sapien, mofo sizzle yo mamma, vulputate vitae, condimentum
                izzle, nizzle.
              </p>
            </div>
            <div className='col s12 l4 offset-l2'> 
              <h4>Connect </h4>
              <ul className='valign-wrapper'> 
                  <li style={{marginRight:'10px'}}> 
                     <i className='fa small fa-facebook'></i>
                  </li>
                  <li> 
                     <i className='fa small fa-twitter'></i>
                  </li>
             </ul>
            </div>
          </div>
        </div>
          <div className='section'>
          <div className='container center-align'> &copy; Surve {new Date().getFullYear()} </div>
          </div>
      </footer>
    );
  }
}

export default Footer;
