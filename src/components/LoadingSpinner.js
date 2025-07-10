import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner-icon">⟳</div>
        <p className="loading-text">Processing your image...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;