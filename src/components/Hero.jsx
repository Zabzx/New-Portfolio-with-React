import React, { useState } from 'react'
import './Hero.css'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'

const Hero = () => {

    // State
    const [lightToggle, setLightToggle] = useState(false)

    const lightSwitch = () => {
        document.body.classList.toggle("dark-theme");
    }

  return (
    <header className="header">
        <div className="my-links">
            <AiFillGithub/>
            <AiOutlineTwitter/>
        </div>

        <div className="light-switch">
            <input type="checkbox" className="checkbox" id="checkbox" onChange={lightSwitch}/>
            <label htmlFor="checkbox" className='label'>
                <BsFillSunFill className='sun'/>
                <BsMoonStarsFill className='moon'/>
                <div className="ball"></div>
            </label>
        </div>
    </header>
  )
}

export default Hero