import React from 'react'
import proimage from '../assets/Prject Image.jpg'


function Projects() {
  return (
    <div className='project'>
        <header>Featured project: </header>
        <span>
            I Have Worked On Many Project over the couers being a web Developers, here are a few of my live, real-world projects.
        </span>

        <div className="project-link">
            <div className="projectinfo">
                <img src={proimage} alt="" srcset="" className='pro-image' />
                <div className='pro-name' >Twinder</div>
                <div className='pro-ditals'>A live geoogical Ap of finding tweets and teiiter users around you.</div>
                <div className="pro-link">
                    <a href='https://#' className='live'>View Live</a>
                    <a href='https://#' className='gitrepo' >Github Repo</a>
                </div>
            </div>

            <div className="projectinfo">
                <img src={proimage} alt="" srcset="" className='pro-image' />
                <div className='pro-name' >Twinder</div>
                <div className='pro-ditals'>A live geoogical Ap of finding tweets and teiiter users around you.</div>
                <div className="pro-link">
                    <a href='https://#' className='live'>View Live</a>
                    <a href='https://#' className='gitrepo' >Github Repo</a>
                </div>
            </div>
             
            <div className="projectinfo">
                <img src={proimage} alt="" srcset="" className='pro-image' />
                <div className='pro-name' >Twinder</div>
                <div className='pro-ditals'>A live geoogical Ap of finding tweets and teiiter users around you.</div>
                <div className="pro-link">
                    <a href='https://#' className='live'>View Live</a>
                    <a href='https://#' className='gitrepo' >Github Repo</a>
                </div>
            </div>
             
            <div className="projectinfo">
                <img src={proimage} alt="" srcset="" className='pro-image' />
                <div className='pro-name' >Twinder</div>
                <div className='pro-ditals'>A live geoogical Ap of finding tweets and teiiter users around you.</div>
                <div className="pro-link">
                    <a href='https://#' className='live'>View Live</a>
                    <a href='https://#' className='gitrepo' >Github Repo</a>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Projects
