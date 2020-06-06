export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'
//
export const REQUEST_CONVERSATION_API_DATA = 'REQUEST_CONVERSATION_API_DATA'
export const RECEIVE_CONVERSATION_API_DATA = 'RECEIVE_CONVERSATION_API_DATA'


export const requestApiData= () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
//
export const requestConversationApiData = () => ({ type: REQUEST_CONVERSATION_API_DATA })
export const receiveConversationApiData = () => ({ type: RECEIVE_CONVERSATION_API_DATA })