import React, { useState } from 'react'

const SendMessageForm = () => {

const [message, setMessage] = useState('')

const onSubmit = e => {
 setMessage(e.target.value)
}


    return (
<form className="send-message-form">
        <input
            value={message}
            placeholder="Say something nice..."
            type="text" 
            onChange={onSubmit}
        />
    </form>
    )
    
}

export default SendMessageForm 