import React from 'react';
import './ImagePreview.css';

const ImagePreview = ({ preview, onRemove, selectedFile, onUpload, loading }) => {
  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3 className="preview-title">
          🖼️ Selected Image
        </h3>
        <button onClick={onRemove} className="remove-btn">
          Remove
        </button>
      </div>
      
      <div className="image-container">
        <img
          src={preview}
          alt="Selected paddy"
          className="preview-image"
        />
      </div>

      {selectedFile && (
        <div className="action-container">
          <button
            onClick={onUpload}
            disabled={loading}
            className={`classify-btn ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <>
                <span className="spinner">⟳</span>
                <span>Classifying...</span>
              </>
            ) : (
              <>
                <span>✓</span>
                <span>Classify Paddy</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImagePreview;