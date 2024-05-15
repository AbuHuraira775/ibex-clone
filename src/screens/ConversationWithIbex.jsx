import React from 'react'
import logo from '../assets/logo.svg'
import ConversationCard from '../components/ConversationCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fb from '../assets/fb.svg'
import insta from '../assets/insta-icon.svg'
import linkedIn from '../assets/linkedin-icon.svg'
import whatsapp from '../assets/whatsapp-logo.svg'
import twitter from '../assets/twitter-icon.svg'

function ConversationWithIbex() {
  return (
    <div className='conversation w-100'>
      <div className="conversationLeft">
        <div className="conversationHead mb-1">
          <h2 className="h2">Start a Conversation with</h2>
          <img src={logo} />
          <p>We love to build new relationships.</p>
          <p>Please reach out and let us know how we can help.</p>
        </div>
      </div>
      <div className="conversationRight">
        <div className="conversationCards flex w-100 mb-1">
          <ConversationCard classname="chat" icon="fa-regular fa-comments" query="Inquiries" description="Your questions are always appreciated. Help us assist you better!" btn="Lets Talk"/>
          <ConversationCard classname="messanger" icon="fa-regular fa-comment-dots" query="Let's Connect" description="We value your queries, and are always a call away to answer them!" btn="Start Chat"/>
        </div>
        <div className="sayHello">
          <p>If you’d like to say “<span className='red hello'>hello</span>”!</p>
        </div>
        <div className="conversationLinks">
          <p>Follow Us </p>
          <a href="#"><img src={fb} alt="" /></a>
          <a href="#"><img src={insta} alt="" /></a>
          <a href="#"><img src={twitter} alt="" /></a>
          <a href="#"><img src={whatsapp} alt="" /></a>
          <a href="#"><img src={linkedIn} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default ConversationWithIbex