import React from 'react'

function JobCard({i,location,jobTitile}) {
  return (
    <div className='jobCard'>
      <div className="jobCardHead mb-1">
        <h2>{jobTitile}</h2>
      </div>
      <div className="jobCardBottom space-between">
        <div className="jobCardLeft flex">
          <i className={`fa ${i} red`}></i>
          <p>{location}</p>
        </div> 
        <div className="jobCardRight"><span className='bpo'>BPO</span></div>
      </div>
    </div>
  )
}

export default JobCard