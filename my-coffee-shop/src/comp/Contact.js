import React from 'react'
import whatsapp from '../assets/Whatsapp.svg'
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/Linked.svg'
import mail from '../assets/Mail.svg'



function Contact() {
  return (
    <div className='contact'>
      <div className="header">
        <span>Conatct With Me :</span>
        <span>Statified with Me? Please conatact me</span>
        <div className="social-media">
          <a href="https://#"><img src={whatsapp} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={facebook} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={instagram} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={linkedin} alt="" srcset="" className='social-link' /></a>
          <a href="https://#"><img src={mail} alt="" srcset="" className='social-link' /></a>
        </div>
      </div>

      <div className='form'>
        <span>Contact me, Let's make magic togather</span>
        <span><input type="text" placeholder='Name:' className='namebox taxtbox' required /></span>
        <span><input type="email" name="" className='emailbox taxtbox' placeholder='Email: ' required /></span>
        <span><textarea placeholder='Massages:' className='massages ' required /></span>
        <button>Send</button>
      </div>

    </div>  
  )
}

export default Contact
