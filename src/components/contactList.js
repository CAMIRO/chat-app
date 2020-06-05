import React from 'react';

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
const ContactList = () => (

<div className="contact-list">  
    <h3>Contact list:</h3>
{DUMMY_DATA.map((item, index)=> <div key={index} style={{ backgroundColor: 'white', marginBottom: '5px'}}>
    <img src={item.contact.avatar}/>
    <p>{item.contact.firstName} {item.contact.lastName}</p>
   
<div style={{ fontSize: '10px'}}>{ item.lastMessage.sentByMe ?  <b>{`You: `}</b> : <b>{item.contact.firstName}</b> }{item.lastMessage.message}</div>
<div style={{ fontSize: '10px'}}></div>
</div>)}

</div>
)

export default ContactList
