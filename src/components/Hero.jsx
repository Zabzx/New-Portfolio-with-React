import React, { useState, useRef, useEffect } from 'react'
import './Hero.css'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import KUTE from 'kute.js'
import Blob1 from '../assets/blob.svg'
import Blob2 from '../assets/blob2.svg'

const Hero = () => {

    // State
    const [lightToggle, setLightToggle] = useState(false)

    const lightSwitch = () => {
        document.body.classList.toggle("dark-theme");
    }

    //Refs
    const blobRef = useRef();
    const blob2Ref = useRef();

    useEffect(() => {
        console.log(blob2Ref.current)
        const tween = KUTE.fromTo(
            blobRef.current,
            {path: blobRef.current},
            {path: blob2Ref.current},
            {repeat: 999, duration: 3000, yoyo: true}
        )
    
        tween.start()
    }, [])


  return (
  <>
    <header className="header container">
        <div className="my-links">
            <AiFillGithub className="my-link-logo"/>
            <AiOutlineTwitter className="my-link-logo twitter-link"/>
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

    <section className="hero">
        <h3 className="intro-heading">Hi!, My name is,</h3>
        <h1 className="intro-heading">Ziabeher Phillips</h1>
        <h3 className="intro-heading">A UI / UX Developer</h3>

        <div className="passion">
            <h1>"You can't teach Passion"</h1>

            <div className="blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path ref={blobRef} id="blob" fill="#4D0ED1" d="M48.2,-15.7C57.2,12,55.5,43,39.5,54.7C23.5,66.4,-6.8,58.8,-25.4,43.3C-44,27.8,-51,4.5,-44.8,-19.3C-38.6,-43.1,-19.3,-67.5,0.2,-67.5C19.6,-67.6,39.2,-43.3,48.2,-15.7Z" transform="translate(100 100)" />
            </g>
            <g>
            <path ref={blob2Ref} id="blob2" fill="#4D0ED1" d="M58,-9C67.5,10.3,62.1,44.2,48.4,50.3C34.7,56.5,12.6,34.7,-10,17.4C-32.6,0.1,-55.7,-12.7,-54.1,-21.1C-52.5,-29.5,-26.3,-33.4,-1,-33.1C24.3,-32.8,48.6,-28.2,58,-9Z" transform="translate(100 100)" />
            </g>
            </svg>

            </div>
        </div>
    </section>
    </>
  )
}

export default Hero