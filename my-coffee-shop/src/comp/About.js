import React from 'react'
import uiux from '../assets/ui & Ux Logo Backgorund Removed.png'

function About() {
  return (
    <div className='aboutme'>
      <header> About me: </header>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellendus commodi quae sunt libero voluptas ipsam corrupti fugiat excepturi optio velit ratione nobis eaque quia, facere atque cumque! Ullam, eaque. </p>
      
      <div className='expriance'>
        <header> 5+ </header>
        <p className='about-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, omnis maiores? Quo facilis voluptas totam eligendi beatae, tempore ipsum perferendis quis fuga et laborum consequuntur! Temporibus nam explicabo quisquam ad? </p>
      </div>
      
      <div className="skils">
        <span className='lable ui-ux'>
          <img src={uiux} alt="" srcset="" className='logo' />
          <span>UI/UX</span>
          <span>DESIGNINIG</span>
        </span>
        <span className='lable webdev'>
          <img src={uiux} alt="" srcset="" className='logo' />
          <span>UI/UX</span>
          <span>DESIGNINIG</span>
        </span>
        <span className='lable adroid'>
          <img src={uiux} alt="" srcset="" className='logo' />
          <span>UI/UX</span>
          <span>DESIGNINIG</span>
        </span>
        <span className='lable web-scrping'>
          <img src={uiux} alt="" srcset="" className='logo' />
          <span>UI/UX</span>
          <span>DESIGNINIG</span>
        </span>
      </div>
    </div>
  )
}

export default About
