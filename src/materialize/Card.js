import React from 'react';

const Card = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-image'>
              <img src={img} alt='' />
              <a href='#' className='halfway-fab btn-floating pink pulse'>
                <i className='material-icons'> favorite </i>
              </a>
            </div>
            <div className='card-content'>
              <span className='card-title'> Title </span>
              Welcome to the best place on earth to go for kayaking and mystery.
              Enjoy
            </div>
            <div className='card-action'>
              <a href='#'> more details </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
