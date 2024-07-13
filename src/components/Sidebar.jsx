import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  const menuItems = ['HOME', 'Explore', 'Notifications', 'Message', 'Bookmarks', 'Analytics', 'Theme', 'Settings'];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={index === 0 ? 'active' : ''}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="create-post-btn">Create a post</button>
    </aside>
  );
}

export default Sidebar;