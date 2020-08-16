import React from 'react';

import Overlay from './overlay';

import './loader.css'

// HOC component to hide/show loader
const WithLoader = WrappedComponent => ({ isLoading, ...props }) => {
  if (!isLoading) {
    const content = (
      <div className='loader__container'>
        <Overlay>
          <div className='loader__text'>Loading...</div>
        </Overlay>
      </div>
    );
    return content;
  }

  return (
    <WrappedComponent {...props} />
  )
};

export default WithLoader;