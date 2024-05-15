import React from 'react'
import triangle from '../assets/triangle.png'
import cylinder from '../assets/cylinder.png'
import logo from '../assets/logo.svg'
import playstore from '../assets/playstore.png'
import apple from '../assets/apple.png'

function AppDownload() {
  return (
    <div className='appDownload'>
      <div className="left" data-aos="slide-up">

        <div className="appDownloadHead">
          <h2 className="h2 ">Download the new <br /> <span className="ibex red red span"><img src={logo} alt="" /></span> app</h2>
        </div>
        <div className="appDownloadBody">
          <p className='p'>Every update you need for a job at ibex. will be available at <br />your fingertips with the official talent ibex. mobile app.</p>
          <p>Now available on your favorite mobile phones.</p>
        </div>
        <div className="appDownloadBottom space-between">

          <div className="downloadCard playStore center">
            <div className="downloadIcon">
              <img src={playstore} alt="" />
            </div>
            <div className="downloadText">
              <p className='get'>GET IN ON</p>
              <p className='storeName'>Google Play</p>
            </div>
          </div>

          <div className="downloadCard appleStore center">
            <div className="downloadIcon">
              <img src={apple} alt="" />
            </div>
            <div className="downloadText">
              <p className='get'>GET IN ON</p>
              <p className='storeName'>App Store</p>
            </div>
          </div>

        </div>

      </div>

      <div className="cylinder">
        <img src={cylinder} data-aos="slide-left" />
      </div>
      <div className="triangle">
        <img src={triangle} data-aos="slide-right" />
      </div>
    </div>
  )
}

export default AppDownload