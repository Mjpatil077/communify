import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Sidebar.css';

function Sidebar() {
  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Notifications', path: '/notifications' },
    { name: 'Message', path: '/message' },
    { name: 'Bookmarks', path: '/bookmarks' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Theme', path: '/theme' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} activeClassName="active">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className="create-post-btn">Create a post</button>
    </aside>
  );
}

export default Sidebar;