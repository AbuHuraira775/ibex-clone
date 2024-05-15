import React, { useState } from 'react'
import video from '../assets/my-video.mp4'
import videoIcon from '../assets/video-play.svg'
import circle from '../assets/circle.png'

function Video() {

    const [cursor, setCursor] = useState({ top: 0, left: 0 })
    const [showCursor, setShowCursor] = useState(true)

    return (
        <div className='videoSection w-100'>
            {/* <div className="videoIconDiv" data-aos='slide-right'> */}
            <div className="videoIconDiv"  >
                {showCursor? 
                <img className="videoIcon"  src={videoIcon}  /> :
                <div></div>}
            </div>

            <div className="circleImage">
                <img src={circle} data-aos='slide-left' />
            </div>
            <video controls className='center'  onClick={()=>setShowCursor(!showCursor)}>

                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video