import React from 'react'
import ProgramHeadSlider from '../components/ProgramHeadSlider'
import ProgramDescription from '../components/ProgramDescription'
import Heading from '../components/Heading'
import programImage from '../assets/Homepage-image-3.jpg'

function Programs() {
  return (
    <div className='program'>
      <div className="prgramSliderHeading">
        <ProgramHeadSlider />
      </div>
      <div className="progrmaContent space-between">
        <div className="programDescription programLeft"  data-aos="slide-up">
          <h1 className="h1">Program</h1>
          <h2>We can't give you <span className="red wings">Wings</span>, <br />But we can help you <span className="red fly">Fly</span>.</h2>
          <div className="programLink ">
            <a href="#">ibex. Learning Academy (ILA)</a>
          </div>
          <div className="programButtong">
            <button className='button btn'>Go To Programs</button>
          </div>
        </div>
        <div className='programRight programBackground'  data-aos="slide-up">
          <img src={programImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Programs