import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Chat</h1>
        </div>
        <div className="chat-messages">
          {/* Messages will go here */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
