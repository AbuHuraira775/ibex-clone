import React from 'react'
import CommunityCards from '../components/CommunityCards'
import award1 from '../assets/award1.jpg'
import lady from '../assets/happy-leady.jpg'
import corporate from '../assets/corporate.jpg'
import sports from '../assets/sports.jpg'
import groundPic from '../assets/ground.jpg'
import cube from '../assets/cube.png'
// import award6 from '../assets/'

function Community() {

  const bgStye = {
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover'
  }

  const bgImages = {
    award1: `url(${award1})`,
    lady: `url(${lady})`,
    corporate: `url(${corporate})`,
    sports: `url(${sports})`,
    groundPic: `url(${groundPic})`
  }
  // const award = `url(${award1})`

  return (
    <div className='community container'>
      <div className="cummunityHeading">
        <h2 className="h2 mb-1 title">Our Community</h2>
        <p className=" mb-1">Experience is not the only thing that we enrich.</p>
        <p className="communityDescription mb-1">We are the people who build the greatest brands.</p>
      </div>

      <div className="communityCards">
        <CommunityCards cardText="Events" image={bgImages.award1}/>
        <CommunityCards cardText="Life @ ibex" image={bgImages.lady}/>
        <CommunityCards cardText="Corporate Social Responsibility" image={bgImages.corporate}/>
        <CommunityCards cardText="Sports" image={bgImages.sports}/>
        <CommunityCards cardText="Rise with ibex." image={bgImages.groundPic}/>
       

      </div>

      <div className="square">
        <img src={cube} data-aos="flip-right"/>
      </div>
    </ div>
  )
}

export default Community