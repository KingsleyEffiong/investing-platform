import loadingGif from './image/05bd96100762b05b616fb2a6e5c223b4_w200.gif';
import React from 'react';

const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'black' }}>
    <img src={loadingGif} alt="Loading..." />
  </div>
);

export default LoadingSpinner;