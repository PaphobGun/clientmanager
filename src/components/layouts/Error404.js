import React from 'react';

const Error404 = () => {
  return (
    <div className="card bg-danger text-white">
      <div className="card-header">
        <h1>Error 404</h1>
      </div>
      <div className="card-body">
        Incorrect url please go to main page or Login.
      </div>
    </div>
  );
};

export default Error404;
