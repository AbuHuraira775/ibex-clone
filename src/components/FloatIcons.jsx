import React from 'react'
import whastApp from '../assets/whatsapp-logo.svg'
import messanger from '../assets/messanger.svg'

function FloatIcons() {
    return (
        <div className='floatIcons'>

            <div className="whatsAppFloatIcon center">
                <img src={whastApp} />
                <p>Connect to WhatsApp</p>
            </div>

            <div className="messangerFloatIcon center">
                <img src={messanger} />
                <p>Connect to Facebook</p>
            </div>
        </div>
    )
}

export default FloatIcons