import React from 'react';

const Collection = () => {
  return (
    <div className='container'>
      <ul className='collection with-header'>
        <li className='collection-header'> Heading </li>
        <li className='collection-item avatar'>
          <i className='material-icons circle blue'> person </i>
          <span className='title'> Anwar </span>
          <p className='grey-text'> from Uzb </p>
          <a className='secondary-content'>
            <i className='material-icons blue-text'> email </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Collection;
