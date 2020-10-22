import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './SideBar/Sidebar';
import Pusher from 'pusher-js';


function App() {
  useEffect(() => {
    // Pusher
    const pusher = new Pusher('1b48845d8bd43142c41e', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
      //console.log(JSON.stringify(data));
    });
  }, []);


  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
