import React, { useEffect }  from 'react';
import ConversationItem from '../../components/conversationItem'
import { requestConversationApiData } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const DUMMY_DATA = [
    {
        "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
        "contact": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "firstName": "John",
          "lastName": "Doe",
          "email": "John.Doe@gmail.com",
          "avatar": "https://cool.com/avatar.jpg"
        },
        "lastMessage": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "message": "Quia praesentium a quos id necessitatibus perspiciatis temporibus. Id et laborum magnam earum laborum.",
          "date": "2020-05-08T02:07:45.410Z",
          "sentByMe": true
        }
      },
      {
        "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
        "contact": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "firstName": "Bruce",
          "lastName": "Wayne",
          "email": "Bruce.w@gmail.com",
          "avatar": "https://cool.com/avatar.jpg"
        },
        "lastMessage": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "message": "Quia praesentium a quos id necessitatibus perspiciatis temporibus. Id et laborum magnam earum laborum.",
          "date": "2020-05-08T02:07:45.410Z",
          "sentByMe": false
        }
      },
      {
        "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
        "contact": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "firstName": "Peter",
          "lastName": "Parker",
          "email": "John.Doe@gmail.com",
          "avatar": "https://cool.com/avatar.jpg"
        },
        "lastMessage": {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "message": "Quia praesentium a quos id necessitatibus perspiciatis temporibus. Id et laborum magnam earum laborum.",
          "date": "2020-05-08T02:07:45.410Z",
          "sentByMe": true
        }
      }
  ]
const ContactList = props => {
  const { requestConversationApiData } = props

  useEffect(() => {
    requestConversationApiData()
  },[requestConversationApiData])


  const data = props.data

  return (
  <div className="contact-list">  
      <h3>All ({DUMMY_DATA.length})</h3>
    {DUMMY_DATA.map((item, index)=> <ConversationItem key={index} item={item}/>)}

  </div>
  );
}

const mapStateToProps = state => ({ data: state.data });
const mapDispatchToProps = dispatch => 
  bindActionCreators({ requestConversationApiData }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps )(ContactList);
