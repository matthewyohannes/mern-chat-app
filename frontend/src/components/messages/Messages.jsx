import React from 'react'
import Message from './Message'

const Messages = () => {
    return (
    //   overflow-auto allows a scroll section to appear if the messages overflow
    
        <div className='px-4 flex-1 overflow-auto'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
  )
}

export default Messages