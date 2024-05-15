import React from 'react'
import Heading from '../components/Heading'
import Icon from '../components/Icon'
import Input from '../components/Input'
import Label from '../components/Label'
import Btn from '../components/Btn'
import JobCard from '../components/JobCard'

function Jobs() {
  return (
    <div className='jobs'>
      <div className="jonhead">
        <h1 className="h1 text-center"  data-aos="slide-up">Get the most exciting jobs<br /> from all over the <span className="red">ibex.</span></h1>
      </div>
      <div className="jobBody">
        <div className="jobSearch">

          <div className="jobSearchField w-100 flex">
            <div className="icon searchIcon h-full"><Icon i="fa-magnifying-glass" /></div>
            <div className="input block">
              <Label label="Search" />
              <Input type="text" />
            </div>
          </div>

          <div className="jobSearchField w-100 flex">
            <div className="icon searchIcon"><Icon i="fa-location-dot" /></div>
            <div className="input block">
              <Label label="Where" />
              <select >
                <option value="">Islamabad</option>
                <option value="">Karachi</option>
                <option value="">Lahore</option>
                <option value="">Pishawar</option>
              </select>
            </div>
          </div>

          <div className="jobSearchField w-100 flex">
            <div className="icon searchIcon"><Icon i="fa-people-group" /></div>
            <div className="input block">
              <Label label="Team" />
              <select className='w-100' >
                <option value="">All Teams</option>
                <option value="">MIS</option>
                <option value="">Marketing</option>
                <option value="">Operations</option>
                <option value="">Tech</option>
                <option value="">Project Management</option>
                <option value="">Quality Assurance</option>
                <option value="">Training and Development</option>
                <option value="">Software</option>
                <option value="">Information and Technology</option>
              </select>

            </div>
          </div>

          <div className="jobSearchButton">
            <Btn btnText="Search" />
          </div>
        </div>

        <div className="allJobs">
          <JobCard jobTitile="Customer Success Specialist - Email/Chat Program" i="fa-location-dot" location="Lahore, Karachi"/>
          <JobCard jobTitile="Social Media Coordinator" i="fa-location-dot" location="Lahore" />
          <JobCard jobTitile="Email and Chat Support Executive - Domestic" i="fa-location-dot" location="Lahore, Karachi, Islamabad" />
          <JobCard jobTitile="Spanish Speaker" i="fa-location-dot" location="Lahore" />
          <JobCard jobTitile="Customer Success Specialist - Voice Program" i="fa-location-dot" location="Lahore, Karachi, Islamabad" />
          <JobCard jobTitile="Customer Support Executive" i="fa-location-dot" location="Lahore, Karachi, Islamabad" />
          <JobCard jobTitile="Balochi Speaker" i="fa-location-dot" location="Karachi" />
          <JobCard jobTitile="Korean Speaker" i="fa-location-dot" location="Lahore, Karachi, Islamabad" />
        </div>
      </div>
    </div>
  )
}

export default Jobs