import React from 'react';
import '../styles/Notifications.css';

function Notifications() {
  const notifications = [
    { id: 1, text: 'User1 liked your post', time: '2h ago' },
    { id: 2, text: 'User2 commented on your photo', time: '5h ago' },
    // Add more notifications
  ];

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <ul className="notification-list">
        {notifications.map(notification => (
          <li key={notification.id} className="notification-item">
            <p>{notification.text}</p>
            <span>{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;