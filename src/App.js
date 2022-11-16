import './App.css';
import React from 'react';
import "stream-chat";
import "stream-chat-react";

const streamChat = require("stream-chat");
function App() {
  return (
    <div className="App">
      <streamChat.Channel Message="Example">
        <streamChat.Window>
          <streamChat.ChannelHeader />
          <streamChat.MessageList />
          <streamChat.MessageInput />
        </streamChat.Window>
        <streamChat.Thread />
      </streamChat.Channel>
    </div>
  );
}

export default App;
