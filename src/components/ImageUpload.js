import React from 'react';
import './ImageUpload.css';

const ImageUpload = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-area">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-icon">📁</div>
          <div className="upload-text">
            <p className="upload-title">
              Click to upload paddy image
            </p>
            <p className="upload-subtitle">
              Supports JPG, PNG, and other image formats
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;