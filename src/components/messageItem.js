import React from 'react'

const MessageItem = (props) => {
    const { text, index } = props
    return (
        <div className="message" key={index} >
        <div className={text.sentByMe ? 'message-text-me' : 'message-text' } >{text.message}</div>
    </div>
    )

}

export default MessageItem