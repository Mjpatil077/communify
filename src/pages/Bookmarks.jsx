import React from 'react';
import '../styles/Bookmarks.css';

function Bookmarks() {
  const bookmarks = [
    { id: 1, title: 'Interesting Article', url: '#', date: '2023-07-01' },
    { id: 2, title: 'Cool Video', url: '#', date: '2023-06-28' },
    // Add more bookmarks
  ];

  return (
    <div className="bookmarks">
      <h1>Bookmarks</h1>
      <ul className="bookmark-list">
        {bookmarks.map(bookmark => (
          <li key={bookmark.id} className="bookmark-item">
            <a href={bookmark.url}>{bookmark.title}</a>
            <span>{bookmark.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmarks;