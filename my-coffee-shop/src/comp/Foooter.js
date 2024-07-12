import React from 'react'
import whatsapp from '../assets/Whatsapp.svg'
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/Linked.svg'
import mail from '../assets/Mail.svg'

function Foooter() {
  return (
    <div className='footer'>
      <div className="foo-link">
        <a href='https://#'>@2024 Axit Jetani</a>
        <a href='https://#'>Web Devloper</a>
        <a href='https://#'>Ui/ UX Designer</a>
        <a href='https://#'>Data Analyst</a>
        <a href='https://#'>Desighned By @axit_jetani</a>
      </div>

      <div className="social-media">
          <a href="https://#"><img src={whatsapp} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={facebook} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={instagram} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={linkedin} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={mail} alt="" srcset="" className='social-link' /></a>
        </div>

    </div>
  )
}

export default Foooter
