import React from 'react';

function Loader() {
  return (
    <div className="position-absolute top-0 start-0 w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', zIndex: 999 }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
