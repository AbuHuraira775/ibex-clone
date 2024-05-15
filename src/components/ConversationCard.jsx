import React from 'react'

function ConversationCard({icon,query,description,btn,classname}) {
  return (
    <div className={`conversationCard ${classname}`}>
        <div className="conversationIcon">
          <i className={`fa fas-${icon}`}></i>
        </div>
        <div className="conversationTitle">
          <h2 className="h2">{query}</h2>
        </div>
        <div className="conversationDescription">
          <p>{description}</p>
        </div>
        <div className="conversationTitle">
          <button className='btn'>{btn}</button>
        </div>
    </div>
  )
}

export default ConversationCard