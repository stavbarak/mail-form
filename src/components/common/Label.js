import React from 'react';

const Label = ({ text, htmlFor }) => {

    return (
      <label className="label" htmlFor={htmlFor}>  
        {text}
      </label>
    );
  };


  export { Label };  