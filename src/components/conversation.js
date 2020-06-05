import React from 'react'

const Conversation = props => {

    const { index, item } = props

    const truncate = input => {
        if (input.length > 20)
            return input.substring(0,40) + '...';
        else
           return input;
    }

    return (
        <div key={index} className="conversation">
            <img alt='avatar' src={item.contact.avatar}/>
            <p>{item.contact.firstName} {item.contact.lastName}</p>   
            <div >{ item.lastMessage.sentByMe ?  <b>{`You: `}</b> : <b>{item.contact.firstName}: </b> }{truncate(item.lastMessage.message)}</div>
      
        </div>
    );
};

export default Conversation