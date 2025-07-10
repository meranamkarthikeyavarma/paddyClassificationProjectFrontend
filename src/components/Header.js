import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">
        Paddy Classification
      </h1>
      <p className="subtitle">
        Upload a paddy image to classify its variety using AI
      </p>
    </div>
  );
};

export default Header;