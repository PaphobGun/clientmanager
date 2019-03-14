import React from 'react';

const Spinner = () => {
  return (
    <div
      className="spinner-border text-primary d-block mx-auto"
      style={{ width: '5rem', height: '5rem' }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
