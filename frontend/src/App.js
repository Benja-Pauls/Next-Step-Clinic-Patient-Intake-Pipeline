import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import your CSS file for styling

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return; // Avoid sending empty messages

    // Add the user's input to messages for immediate UI update
    setMessages((prevMessages) => [
      { text: input, sender: 'user' },
      ...prevMessages,
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

      // Data is the response from the backend
      const data = await response.json();
      var bot_message;

      if (!data.data_searched) {
        bot_message = data.reply;
      } else {
        bot_message = `On it!\nSearching for "${data.data_searched}" . . .\nHere are the results:\n${data.reply}\n`;
      }

      // Add the bot's response to messages
      setMessages((prevMessages) => [
        { text: bot_message, sender: 'bot' },
        ...prevMessages,
      ]);
    } catch (error) {
      console.error('There was a problem sending/receiving the message:', error);
    }

    setInput(''); // Clear the input field
  };

  // Scroll the chat container to the bottom when the component mounts
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src="logo.png" alt="Next Step Clinic Logo" className="header-image" />
      </div>
      <div className="chat-messages" ref={chatContainerRef}>
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
