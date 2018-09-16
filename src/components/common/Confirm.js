import React from 'react';

const Confirm = ({ msg, type }) => {

    return (
      <div className={'alert alert-' + type}>
        {msg}
      </div>
    );
  };


  export { Confirm };  