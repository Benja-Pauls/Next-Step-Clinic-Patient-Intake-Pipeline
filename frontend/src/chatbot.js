import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return; // Avoid sending empty messages

    // Add the input to messages for immediate UI update
    setMessages(messages => [...messages, { text: input, sender: 'user' }]);
    
    try {
      const response = await fetch('/api/send-message', { // Adjust the URL as needed
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

      // Assuming the backend sends back the response message
      setMessages(messages => [...messages, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      console.error('There was a problem sending the message:', error);
    }

    setInput(''); // Clear the input field
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender === 'user' ? 'You: ' : 'Bot: '}</strong>
            {msg.text}
          </p>
        ))}
      </div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
