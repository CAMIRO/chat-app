import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestHelloWorld } from '../../actions'
// components
import MessageList from '../../components/messageList';
import ContactList from '../../components/contactList';
import SendMessageForm from '../../components/sendMessageForm'

const Home  = props => {

  useEffect(() => {
    props.requestHelloWorld();
  })
  return (
    <div className="app">
      {props.helloWorld}
      <ContactList />
      <MessageList /> 
      <SendMessageForm />
    </div>
  );
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });
const mapDispatchToProps = dispatch => bindActionCreators({requestHelloWorld}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps )(Home);