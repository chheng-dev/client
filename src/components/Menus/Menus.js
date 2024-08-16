import React from 'react'
import "./Menus.css"
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menu =  ({toggle}) => {
  return (
    <>
      {
      toggle ?  (
        <>
        {/* Profile  */}
        <Zoom>
          <div className='navbar-profile-pic'>
            <img src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/309629125_1329359241206402_1997100209926285080_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKW5XDO9KBpy6IDGzRi9QsvAeLeUiGV-68B4t5SIZX7tT9mfa4lB7LiOWakYNFG5C44kdlTuWZ0iOTYiRRXbZD&_nc_ohc=13f3WYemsn4Q7kNvgEFchSt&_nc_ht=scontent.fpnh19-1.fna&oh=00_AYDNAtt28a-rPfPA0BlFLNBZ331vXeGgg5G1SsNkZr_e8w&oe=66BF42F7' alt='profile pic' />
          </div>
        </Zoom>

        {/* Desktop Menus */}
        <Fade left> 
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='about' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='education' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='techStack' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='project' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>
            
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='work' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcPortraitMode />
                  Work Experince
                </Link>
              </div>          
            </div>

            {/* <div className='nav-item'>
              <div className='nav-link'>
                <Link to='testimonial' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                  <FcVoicePresentation />
                  Testimonial
                </Link>
              </div>
            </div> */}

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contactUs' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}  
                >
                    <FcBusinessContact />
                    Contact
                </Link>
              </div>          
            </div>
          </div>
        </Fade>
        </>
      ) : (
        <>
          {/* Mobile Menus  */}
          <div className='nav-items'>
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='home' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcHome title='Home' />
              </Link>
            </div>
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='about' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcAbout title='About' />
              </Link>
            </div>
          </div>
          
          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='work' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcPortraitMode title='Work Experince' />
              </Link>
            </div>          
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='techStack' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcBiotech title='Tech Stack' />
              </Link>
            </div>
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='education' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcReadingEbook title='Education' />
              </Link>
            </div>
          </div>

          <div className='nav-item'>
            <div className='nav-link'>
              <Link to='project' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcVideoProjector title='Projects' />
              </Link>
            </div>
          </div>

          {/* <div className='nav-item'>
            <div className='nav-link'>
              <Link to='testimonial' 
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}  
              >
                <FcVoicePresentation title='Testimonial' />
              </Link>
            </div>
          </div> */}

          <div className='nav-item'>
            <div className='nav-link'>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
        </>
      )
      }
    </>
  )
}

export default Menu
