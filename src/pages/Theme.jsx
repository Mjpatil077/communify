import React, { useState } from 'react';
import '../styles/Theme.css';

function Theme() {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // In a real app, you'd apply the theme change here
  };

  return (
    <div className="theme">
      <h1>Theme Settings</h1>
      <div className="theme-options">
        <button 
          className={`theme-button ${theme === 'dark' ? 'active' : ''}`} 
          onClick={() => handleThemeChange('dark')}
        >
          Dark Theme
        </button>
        <button 
          className={`theme-button ${theme === 'light' ? 'active' : ''}`} 
          onClick={() => handleThemeChange('light')}
        >
          Light Theme
        </button>
      </div>
    </div>
  );
}

export default Theme;
