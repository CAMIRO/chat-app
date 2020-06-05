import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestApiData } from '../../actions'
// components
import MessageList from '../../components/messageList';
import ContactList from '../../components/contactList';
import SendMessageForm from '../../components/sendMessageForm'

const Home  = props => {
  const { requestApiData } = props
  
  useEffect(() => {
    requestApiData()
  },[requestApiData])

  console.log('tooooken', localStorage.getItem('token'));

const data = props.data
  console.log('data: ', data)
  return (
    <div className="app">
      
      <ContactList />
      <MessageList /> 
      <SendMessageForm />
    </div>
  );
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestApiData }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps )(Home);