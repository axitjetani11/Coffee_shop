import React from 'react'
import profile from '../assets/RK21 - 1.png'

function Hero() {
  return (
    <div className='hero'>
            <div className="profile">   
                <p>Hello , i'm </p>
                <p>Axit Jetani</p>
                <p>React js Devloper with JavaScript, HTML, CSS, Tailwind CSS, Bootstrep</p>
                <div className="acces-btn">
                    <button>About Me</button>
                    <button>Projects</button>
                </div>
            </div>
            <div className="profileimage">
                <div className="circle">
                    <img src={profile} alt="Axit Jetani" srcset="" className='pro-image' />
                </div>
            </div>
    </div>
  )
}

export default Hero
