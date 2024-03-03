import React from 'react';

const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-card">
      <h4>{notification.sender}</h4>
      <p>{notification.message}</p>
      <span>{notification.time} - {notification.date}</span>
    </div>
  );
}

export default NotificationCard;