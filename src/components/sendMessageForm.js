import React, { useState } from 'react'

const SendMessageForm = () => {

const [message] = useState('')
    return (
<form className="send-message-form">
        <input
            value={message}
            placeholder="Say something nice..."
            type="text" 
        />
    </form>
    )
    
}

export default SendMessageForm 