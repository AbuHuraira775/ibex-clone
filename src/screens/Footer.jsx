import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import FloatIcons from '../components/FloatIcons'

function Footer() {
  return (
    <div className='footer space-between mb-1'>
      <div className="footerlLeft">

        <Link to='/jobs'>Jobs</Link>
        <Link to='/our-community'>Our Community</Link>
        <Link to='/propgrams'>Programs</Link>
        <Link to='/check-status'>Application/Referral Status</Link>
      </div>
      <div className="footerRight flex">
        <p>© 2024  All right reserved  </p>
        <p>|</p>
        <a href="https://www.talentibex.com/privacy-policy">privacy policy</a>
      </div>
      <FloatIcons />
    </div>
  )
}

export default Footer