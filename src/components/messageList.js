import React from 'react';

// components
import Message from './message'

const MessageList = () => {

    const DUMMY_DATA = [
        {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "message": "Corporis odio ut laboriosam maiores.",
          "date": "2019-08-26T20:50:06.770Z",
          "sentByMe": true
        },
        {
          "id": "79fd8ddd-be8a-4d20-97f4-xxxxxxxxxxx",
          "message": "other reply",
          "date": "2019-08-26T21:40:09.770Z",
          "sentByMe": false
      
        },
        {
          "id": "79fd8ddd-be8a-4d20-97f4-666772b945ba",
          "message": "i reply back",
          "date": "2019-08-26T23:00:01.770Z",
          "sentByMe": true
        },
      ]

    return <div className='message-list'>
        {DUMMY_DATA.map((text, index)=> {
            return (
                <Message key={index} text={text} index={index} />
            )
        })}
        </div>

}


export default MessageList 