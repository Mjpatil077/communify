import React, { useState } from 'react';
import '../styles/Message.css';

function Message() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there!', sender: 'User1' },
    { id: 2, text: 'Hi! How are you?', sender: 'You' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="message">
      <h1>Messages</h1>
      <div className="message-container">
        {messages.map(message => (
          <div key={message.id} className={`message-bubble ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
            <span>{message.sender}</span>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Message;