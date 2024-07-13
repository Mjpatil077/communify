import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Communify</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="logout-btn">Log out</button>
      <img src="user-avatar.jpg" alt="User Avatar" className="user-avatar" />
    </header>
  );
}

export default Header;