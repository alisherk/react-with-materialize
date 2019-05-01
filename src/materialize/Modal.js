import React, { Component } from 'react'; 
import M from 'materialize-css';

class Modal extends Component {

componentDidMount() {
    const elem = document.querySelector('.modal');
    M.Modal.init(elem);
}

  render() {
    return (
      <div className='container'>

      <h2> Modal </h2>

      <a href='#terms' className='btn orange modal-trigger'> Terms & Conditions </a>
    
       <div className='modal' id='terms'> 
         <div className='modal-content'> 
          <h4>Login</h4> 
           <p> Lorem impusm shu ma ro d metus haro elid. Sid man for tur
               aktor a kot mat edu risus da msa 
          </p>
       </div>
       <div className='modal-footer'> 
         <a href='#' className='modal-close btn indigo'> Close </a>
       </div>
       </div>

      </div>
    )
  }
}

export default Modal;

