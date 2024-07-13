import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import ProfileCircles from '../components/ProfileCircles';
import Suggestions from '../components/Suggestions';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <Sidebar />
        <main className="main-content">
          <ProfileCircles />
          <Feed />
        </main>
        <Suggestions />
      </div>
    </div>
  );
}

export default Home;