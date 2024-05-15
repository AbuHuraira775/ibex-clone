import React from 'react'
import play from '../assets/video-play.svg'

function EventCard({ img, popup, card }) {
  const bgStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  }
  return (
    <>
      <div className={`eventCard card${card}`}  data-aos="slide-up">
        <div className="eventCardHead"><img src={img} className='w-100' /></div>
        {/* <div className="eventCardBody"><p>Ibex.</p></div>  */}
        <div className="eventPopUp"><a href="#">{popup} hello  folks</a></div>
      </div>
    </>
  )
}

export default EventCard