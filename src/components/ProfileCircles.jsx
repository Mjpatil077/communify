import React from 'react';
import '../styles/ProfileCircles.css';

function ProfileCircles() {
  const profiles = [
    { id: 1, image: 'profile1.jpg' },
    { id: 2, image: 'profile2.jpg' },
    { id: 3, image: 'profile3.jpg' },
    { id: 4, image: 'profile4.jpg' },
    { id: 5, image: 'profile5.jpg' },
  ];

  return (
    <div className="profile-circles">
      {profiles.map(profile => (
        <div key={profile.id} className="profile-circle">
          <img src={profile.image} alt={`Profile ${profile.id}`} />
        </div>
      ))}
    </div>
  );
}

export default ProfileCircles;