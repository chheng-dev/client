import React, { Fragment } from 'react'
import "./Home.css"
import Typewriter from "typewriter-effect"
import { useTheme } from '../../context/ThemeContext'
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"
import Fade from 'react-reveal/Fade';
import { MdOutlineMenu } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { AiOutlineClose } from "react-icons/ai";
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom';


const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"));
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <div className='home-container' id='home'>
      <div className='menu' onClick={toggleDrawer}>
        <MdOutlineMenu size={30} />
      </div>
      <div className='theme-btn' onClick={handleTheme}>
        {
          theme === 'light' ? (<BsFillMoonStarsFill size={20}/>) : (<BsFillSunFill size={30} />)
        }
      </div>
      <div className='container home-content'>
        <Fade right>
          <div className='top-title'>
            <h2>Hi 👋 I'm a </h2>
            <h1>
              <Typewriter 
                options={{
                  strings: ["Web Developer !"],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
          </div>
        </Fade>
        <Fade bottom>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button>
            <button className='btn btn-cv'>Mt Resume</button>
          </div>
        </Fade>
      </div>

      <Drawer
          open={isOpen}
          direction='left'
          className='w-100'
          onClose={toggleDrawer}
      > 
        <div className='close-btn'>
          <AiOutlineClose size={25} onClick={toggleDrawer} className='' />
        </div>
        <div className='drawer'>
          <div className='profile'>
            <div>
              <Zoom>
                <div className='navbar-profile-pic'>
                  <img src='https://scontent.fpnh19-1.fna.fbcdn.net/v/t39.30808-6/309629125_1329359241206402_1997100209926285080_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKW5XDO9KBpy6IDGzRi9QsvAeLeUiGV-68B4t5SIZX7tT9mfa4lB7LiOWakYNFG5C44kdlTuWZ0iOTYiRRXbZD&_nc_ohc=13f3WYemsn4Q7kNvgEFchSt&_nc_ht=scontent.fpnh19-1.fna&oh=00_AYDNAtt28a-rPfPA0BlFLNBZ331vXeGgg5G1SsNkZr_e8w&oe=66BF42F7' alt='profile pic' />
                </div>
              </Zoom>
            </div>
            <div className='profile-name'>
              <h4>Chheng</h4>
              <span>chheng@gmail.com</span>
            </div>
          </div>
          <hr />
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='home' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
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
                  onClick={toggleDrawer}  
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
                  onClick={toggleDrawer}  
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
                  onClick={toggleDrawer}  
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
                  onClick={toggleDrawer}  
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
                  onClick={toggleDrawer}  
                >
                  <FcPortraitMode />
                  Work Experince
                </Link>
              </div>          
            </div>

            <div className='nav-item'>
              <div className='nav-link'>
                <Link to='contactUs' 
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={toggleDrawer}  
                >
                    <FcBusinessContact />
                    Contact
                </Link>
              </div>          
            </div>
          </div>

          <div className='theme-mode' onClick={handleTheme}>
            {
              theme === 'light' ? (<Fragment><BsFillMoonStarsFill size={15}/> <span className='ml-2'>Dark mode</span></Fragment>) : (<Fragment><BsFillSunFill size={15}/> <span className='ml-2'>Light mode</span></Fragment>)
            }
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Home
