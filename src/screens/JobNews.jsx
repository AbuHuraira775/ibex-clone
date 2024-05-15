import React from 'react'
import jobNews from '../assets/jobnew.png'

function JobNews() {
  return (
    <div className='jobNews flex w-100'>
      <div className="jobNewsLeft w-100">
        <img src={jobNews}  data-aos="slide-up"/>
      </div>
      <div className="jobNewsRight w-100 align-center" data-aos="slide-up">
        <div className="jobNewsHead">
          <h2 className="h2 mb-1">Never want to miss any <span className="red">Job News?</span></h2>
          <p>Get notifications of new Jobs. No spam ever.</p>
          <div className="jobSubscription space-between w-100">
            <div className="field center">
              <i className="fa-regular fa-envelope"></i>
              <input type="email" placeholder='Enter Email Address' />
            </div>
              <button className='btn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobNews