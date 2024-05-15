import React, { useEffect, useState } from 'react'
import navLogo from '../assets/logo.svg'
import Btn from './Btn'
import { Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
import fb from '../assets/fb.svg'
import insta from '../assets/insta-icon.svg'
import linkedIn from '../assets/linkedin-icon.svg'
import whatsapp from '../assets/whatsapp-logo.svg'
import twitter from '../assets/twitter-icon.svg'

function Navbar() {

  const [show, setShow] = useState(true)
  const [stylishNav, setStylishNav] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobile, setMobileMenu] = useState(true)

  const showNav = {
    transform: "translateY(0)",
    backgroundColor: "#ffff",
    height: "5vw"
  }

  const hideNav = {
    backgroundColor: "pink",
    transform: "translateY(-55vw)",
  }

  const stylehNav = {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    backdropFilter: "blur(50vw)",
    height: "80px",

  }

  const controlNavbar = () => {
    console.log('scroll is running')
    if (window.scrollY > lastScrollY) {
      setStylishNav(false)
      setShow(false)
    }
    else if (window.scrollY < lastScrollY) {
      setShow(true)
      if (window.scrollY <= 12) {
        setStylishNav(false)
      }
      else {
        setStylishNav(true)
      }
    }

    setLastScrollY(window.scrollY);
    console.log('last', lastScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  })

  const nav = {
    backgroundColor: "#fff",
  }
  return (
    <nav >

      <div className={`desktopNav  space-between`} style={show ? (stylishNav ? stylehNav : showNav) : hideNav}  >
        <div className="desktopNavLogo">
          <Link to='/'>
            <img src={navLogo} alt="" />
          </Link>
        </div>

        <div className="desNavLinks flex align-center">
          <div className="desktopLinksLI">

            <ul className='flex'>
              <li><NavLink to='/jobs' className={({ isActive }) => isActive ? 'activeLink' : ''}>Jobs</NavLink></li>
              <li><NavLink to='/our-community' className={({ isActive }) => isActive ? 'activeLink' : ''}>Our Community</NavLink></li>
              <li><NavLink to='/programs' className={({ isActive }) => isActive ? 'activeLink' : ''}>Programs</NavLink></li>
              <li><NavLink to='/check-status' className={({ isActive }) => isActive ? 'activeLink' : ''}>Application/Reffera Status</NavLink></li>
            </ul>
          </div>

          <div className="desktopinkLogin">
            <div className="desNavLogin">
              <Btn btnText="Login" />
            </div>
          </div>
        </div>


      </div>

      <div className="mobileNav flex" >

        {/* <div style={show ? (stylishNav ? stylehNav : showNav) : hideNav} > */}

          <div className="mobileNavMenu" >
            {mobile ? <i className="fa-solid fa-bars" onClick={() => setMobileMenu(false)}></i> : <><i className="fa-solid fa-xmark" onClick={() => setMobileMenu(true)}></i> <SideNav status={mobile}/></>}
          </div>
          <div className="mobileNavLogo">
            <Link to='/'><img src={navLogo} alt="" /></Link>
          </div>
        </div>

        <div className="mobileNavLinks">
          {/* <Link to='/jobs'> Jobs</Link> */}
        </div>
      {/* </div> */}


    </nav>
  )
}

const SideNav = ({status}) => {

  return (

    <div className="sideNavLinks" style={status ? {left: "-100%"} : {left: "0"}}>

      <div className="sideNavHead">
        <div className="sideNavLI">
          <ul>
            <li><NavLink to='/jobs' className={({ isActive }) => isActive ? 'activeLink' : ''}> Jobs</NavLink></li>
            <li><NavLink to='/programs' className={({ isActive }) => isActive ? 'activeLink' : ''}> Programs</NavLink></li>
            <li><NavLink to='/our-community' className={({ isActive }) => isActive ? 'activeLink' : ''}> Our Community</NavLink></li>
            <li><NavLink to='/check-status' className={({ isActive }) => isActive ? 'activeLink' : ''}> Appication/Referral Status</NavLink></li>
          </ul>
        </div>
        <div className="sideNavLogin">
          <button className='btn sideNavLoginBtn'> Login</button>
        </div>
      </div>

      <div className="sideNavBottom" >
        <div className="sideNavBottomDescription">
          <h2 className="h2">We love to build new relationships</h2>
          <p className="p">Please reach out and let us know how we can help.</p>
          <hr className="hr" />

        </div>


        <div className="sideNavBottomLinks">
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

export default Navbar