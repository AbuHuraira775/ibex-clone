import React from 'react'
import Heading from '../components/Heading'
import Description from '../components/Description'
import EventCard from '../components/EventCard'
import event_img_1 from '../assets/ibex.-Karachi-Facility.jpg'
import event_img_2 from '../assets/moneyHeist.jpg'
import event_img_3 from '../assets/score-ace-it.jpg'
import event_img_4 from '../assets/respect-video-img-7.jpg'
import event_img_5 from '../assets/respect-video-img-3.jpg'
import event_img_6 from '../assets/ibexBuilding.jpg'
import event_img_7 from '../assets/ilead-02.jpg'

function IbexLife() {
  return (
    <div className='ibexLife'>
      <div className="ibexLifeHead"  data-aos="slide-up">
        <h1 className="h1 title text-center mb-1">Believe in giving Respect</h1>
        <p className='ibexLifeDescription text-center mb-1'><span className='red'>ibex.</span> will continue to create such growth opportunities for the <br />employees to craft a way for a bright & great future</p>
        <p className='metaDescription text-center mb-1'>Facilities and activities that you will be able to enjoy at ibex.</p>
      </div>


      <div className="ibexLifeBody w-100">
        <EventCard img={event_img_1} card='1' />
        <EventCard img={event_img_2} card='2' />
        <EventCard img={event_img_3} card='3' />
        <EventCard img={event_img_4} card='4' />
        <EventCard img={event_img_5} card='5' />
        <EventCard img={event_img_6} card='6' />
        <EventCard img={event_img_7} card='7' />
      </div>
    </div>
  )
}

export default IbexLife