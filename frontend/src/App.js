import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return; // Avoid sending empty messages

    // Add the user's input to messages for immediate UI update
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add the bot's response to messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.reply, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('There was a problem sending/receiving the message:', error);
    }

    setInput(''); // Clear the input field
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="..\public\logo.png" alt="Logo" className="header-image" />
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
