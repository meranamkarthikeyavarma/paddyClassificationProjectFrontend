import React from 'react';
import './ClassificationResult.css';

const ClassificationResult = ({ result }) => {
  return (
    <div className="result-container">
      <h3 className="result-title">
        ✅ Classification Result
      </h3>
      
      <div className="result-content">
        <div className="result-item">
          <span className="result-label">Predicted Class:</span>
          <span className="result-value predicted-class">
            {result.predicted_class}
          </span>
        </div>
        
        <div className="result-item">
          <span className="result-label">Confidence:</span>
          <span className="result-value confidence">
            {(result.confidence * 100).toFixed(1)}%
          </span>
        </div>
        
        <div className="result-footer">
          <p className="processing-time">
            Processing time: {result.processing_time || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassificationResult;