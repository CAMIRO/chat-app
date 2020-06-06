import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { requestConversationApiData } from '../../actions'
// components
import MessageList from '../message';
import Conversation from '../conversation';
import SendMessageForm from '../../components/sendMessageForm'

const Home  = props => {
  const { requestConversationApiData } = props
  console.log(requestConversationApiData)
  
  useEffect(() => {
    requestConversationApiData()
  },[requestConversationApiData])


const data = props.data
  console.log(data)
  return (
    <div className="app">
      <Conversation />
      <MessageList /> 
      <SendMessageForm />
      <p>{data ? `${data.firstName}` :`Loading...`}</p>
    </div>
  );
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestConversationApiData }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps )(Home);