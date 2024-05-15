import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../screens/Home'
import Jobs from '../../screens/Jobs'
import Community from '../../screens/Community'
import Programs from '../../screens/Programs'
import Status from '../../screens/Status'
import Login from '../../screens/Login'
import Footer from '../../screens/Footer'
import Navbar from '../../components/Navbar'

function MainRouting() {
    return (
        <div >
            <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/our-community' element={<Community />} />
                    <Route path='/programs' element={<Programs />} />
                    <Route path='/check-status' element={<Status />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default MainRouting