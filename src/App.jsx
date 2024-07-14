import React from 'react';
import Home from './pages/Home.jsx';
import Analytics from './pages/Analytics.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Explore from './pages/Explore.jsx';
import Message from './pages/Message.jsx';
import Notifications from './pages/Notifications.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Analytics />
      <Bookmarks />
      <Explore />
      <Message />
      <Notifications />
    </div>
  );
}
export default App;