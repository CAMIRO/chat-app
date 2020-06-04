import React from 'react';
import MessageList from './components/messageList';
import ContactList from './components/contactList';
import SendMessageForm from './components/sendMessageForm' 
// components



const  App = () => {
  return (
    <div className="app">
      <ContactList />
      <MessageList /> 
      <SendMessageForm />
    </div>
  );
}

export default App;
