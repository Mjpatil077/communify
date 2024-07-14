import React from 'react';
import '../styles/Explore.css';

function Explore() {
  return (
    <div className="explore">
      <h1>Explore</h1>
      <div className="explore-grid">
        {/* Add grid items here */}
        <div className="explore-item">Trending Topic 1</div>
        <div className="explore-item">Trending Topic 2</div>
        {/* Add more items */}
      </div>
    </div>
  );
}

export default Explore;