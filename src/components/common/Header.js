import React from 'react';

// Make a component
const Header = ({ headerText }) => {
  return (
    <div className="header">
      {headerText}
    </div>
  );
};


export { Header };
