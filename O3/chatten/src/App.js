import './App.css';
import ChatBox from './components/ChatBox.jsx';
import MessageList from './components/MessageList.jsx';
import {useState} from 'react';

function App() {

  const [messages, setMessages] = useState([]);

  const onMessage = (name, message) => {

    if(message === '') return;

    const newMessage = {
      user: name,
      text: message
    }
    setMessages([...messages, newMessage])
  }
  console.log(messages);
  
  return (
    <div className="App">
      <ChatBox 
        name='User1'
        onMessage={onMessage}
      />
      <MessageList messages={messages}/>
      <ChatBox 
        name='User2'
        onMessage={onMessage}
      />
    </div>
  );
}

export default App;
