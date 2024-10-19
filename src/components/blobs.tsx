import React from 'react';

const Blobs: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
    <div className="blob-container">
      <div className="blob bg-blue-500 opacity-50"></div>
      <div className="blob bg-purple-500 opacity-50"></div>
      <div className="blob bg-pink-500 opacity-50"></div>
    </div>
  </div>
  );
};

export default Blobs;
