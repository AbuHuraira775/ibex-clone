import React from 'react'
import { Link } from 'react-router-dom'
import award1 from '../assets/award1.jpg'
import award2 from '../assets/award1.jpg'
import award3 from '../assets/award1.jpg'
import award4 from '../assets/award1.jpg'
import award5 from '../assets/award1.jpg'
import award6 from '../assets/award1.jpg'

function CommunityCards({cardText,image}) {

  const bgStye = {
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    borderRadius: "2rem"
  }

  const award = `url(${award1})`


  return (
    // <div className='communityCard' style={{backgroundImage:{image}}}>
    <div className='communityCard' style={{backgroundImage:image,...bgStye}} data-aos="slide-up">
      <div className="cardBottomSection">
        <p>{cardText}</p>
        <Link to='/'>
          <div className="cardArrow">
          <i className="fa-solid fa-chevron-right"></i>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CommunityCards