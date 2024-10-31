// src/App.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Login.css';

const socket = io('http://localhost:3000'); // Replace with your backend URL if different

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  // Fetch initial chat history and listen for incoming messages
  useEffect(() => {
    fetch('http://localhost:3000/messages') // Replace with backend URL if different
      .then((res) => res.json())
      .then((data) => setMessages(data));

    socket.on('chat message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  // Handle sending a new message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username.trim()) {
      const newMessage = { username, message };
      socket.emit('chat message', newMessage); // Send the message to the server
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat Room</h2>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <strong>{msg.username}:</strong> {msg.message} <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="chat-form">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button> {/* "Send" button */}
        </form>
      </div>
    </div>
  );
}

export default App;
