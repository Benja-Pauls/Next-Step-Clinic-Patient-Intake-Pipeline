import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import _ from 'lodash'
import AnimatedTextDisplay from './AnimatedText.js';


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
      const response = await fetch('http://localhost:5001/api/send-message', {
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
      //set timeout for every .5 seconds and then adjust the state (look at useEffect instead)

      const words = _.split(data.reply, " ");
      
      //const currentPreviousMessages = prevMessages;
    
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
        <img src='logo.png' alt=" Next Step Logo" className="header-image" />
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div className={`chat-bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}>
            <AnimatedTextDisplay text = {msg.text} sender = {msg.sender} />
          </div>
        ))}
      </div>
      <div className="input-container">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
