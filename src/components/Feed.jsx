import React from 'react';
import '../styles/Feed.css';

function Feed() {
  return (
    <div className="feed">
      <div className="post">
        <div className="post-header">
          <img src="user961.jpg" alt="User 961" className="post-avatar" />
          <div className="post-info">
            <h3>User_961 🌟</h3>
            <p>SUNSHINE</p>
          </div>
        </div>
        <img src="stadium.jpg" alt="Motera Stadium" className="post-image" />
        <div className="post-actions">
          <button>Like</button>
          <button>Share</button>
        </div>
        <p className="post-likes">Liked by mayur.patil and 6.9M others</p>
        <p className="post-caption">MOTERA STADIUM : IN vs NZ</p>
      </div>
    </div>
  );
}

export default Feed;