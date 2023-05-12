import React, { useState } from 'react';
import axios from 'axios';
import { coyoteWithPlacard, coyotePointsUp } from 'utils/svgIcons';

const Notification = () => {
  const [notification, setNotification] = useState(null);

  const handleClick = async () => {
    try {
      await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setNotification({ type: 'success', message: 'Request successful' });
    } catch (error) {
      setNotification({ type: 'error', message: 'Error occurred' });
    }
  };

  const renderNotification = () => {
    if (!notification) {
      return null;
    }

    let icon;

    if (notification.type === 'success') {
      icon = coyotePointsUp;
    } else if (notification.type === 'error') {
      icon = coyoteWithPlacard;
    }

    return (
      <div className={`notification ${notification.type}`}>
        {icon}
        <span className="message">{notification.message}</span>
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleClick}>Make Request</button>
      {renderNotification()}
    </div>
  );
};

export default Notification;