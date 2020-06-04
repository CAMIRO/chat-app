import React, { useState } from 'react'

const SendMessageForm = () => {

const [message, setMessage] = useState('')
    return (
<form className="send-message-form">
        <input
            value={message}
            placeholder="Type your message"
            type="text" 
        />
    </form>
    )
    
}

export default SendMessageForm 