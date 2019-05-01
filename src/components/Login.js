import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <div className='modal' id='terms'>
        <div className='modal-content'>
          <h4 className='center indigo-text'>Login</h4>
          <form>
            <div className='input-field'>
              <input type='text' id='fname' />
              <label htmlFor='fname'>First Name</label>
            </div>
            <div className='input-field'>
              <input type='text' id='lname' />
              <label htmlFor='lname'>Last Name</label>
            </div>
            <div className='input-field'>
              <input type='email' id='email' />
              <label htmlFor='lname'>Email</label>
            </div>
            <div className='input-field'>
              <input type='password' id='password' />
              <label htmlFor='lname'>Password</label>
            </div>
            <div className='input-field'>
                 <button className='btn indigo waves-effect'> 
                 <i className='material-icons right'>done</i> Login 
                 </button> 
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
