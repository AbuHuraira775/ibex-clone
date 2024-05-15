import React from 'react'
import Hero from '../components/Hero'
import Community from './Community'
import Programs from './Programs'
import Jobs from './Jobs'
import IbexLife from './IbexLife'
import AppDownload from './AppDownload'
import JobNews from './JobNews'
import Footer from './Footer'
import Navbar from '../components/Navbar'
import P from '../components/P'
import ConversationWithIbex from './ConversationWithIbex'

function Home() {
  return (
    <div>
      <Hero />
      <Community />
      <Programs />
      <Jobs />
      <IbexLife />
      <AppDownload />
      <JobNews />
      <ConversationWithIbex />
    </div>
  )
}

export default Home