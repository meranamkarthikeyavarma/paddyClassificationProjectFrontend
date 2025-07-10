import React, { useState } from 'react';
import Header from '../components/Header';
import ImageUpload from '../components/ImageUpload';
import ImagePreview from '../components/ImagePreview';
import ClassificationResult from '../components/ClassificationResult';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import './PaddyClassificationPage.css';

const PaddyClassificationPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setResult(null);
    setError(null);
    
    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select an image first');
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to classify image');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Header />
        
        <div className="main-content">
          <div className="card">
            <ImageUpload onFileSelect={handleFileSelect} />
            
            {preview && (
              <ImagePreview 
                preview={preview} 
                onRemove={resetForm}
                selectedFile={selectedFile}
                onUpload={handleUpload}
                loading={loading}
              />
            )}
            
            {loading && <LoadingSpinner />}
            
            {error && <ErrorMessage message={error} />}
            
            {result && <ClassificationResult result={result} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaddyClassificationPage;