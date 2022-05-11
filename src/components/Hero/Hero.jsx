import React, { useState, useRef, useEffect } from 'react'
import './Hero.css'
import { gsap } from "gsap"
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import KUTE from 'kute.js'

const Hero = () => {

    // State
    const [lightToggle, setLightToggle] = useState(false)

    const lightSwitch = () => {
        document.body.classList.toggle("dark-theme");
        setLightToggle(!lightToggle);
    }

    // Refs
    const hiRef = useRef();
    const nameRef = useRef();
    const devRef = useRef();
    const blobRef = useRef();
    const blob2Ref = useRef();
    const gitHubLinkRef = useRef();

    //Animations

    // Blob animation
    useEffect(() => {
        const tween = KUTE.fromTo(
            blobRef.current,
            {path: blobRef.current},
            {path: blob2Ref.current},
            {repeat: 999, duration: 3000, yoyo: true}
        )
    
        tween.start()
    }, []);

    // Name animation
    useEffect(() => {
        gsap.fromTo(hiRef.current, {x: "-100px", opacity: 0}, {x: "0px", opacity: 1, duration: 1});
        gsap.fromTo(nameRef.current, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, duration: 1, delay: 1})
    })

    //Typewriting Effect
    useEffect(() => {
        function typeWriting() {
            const texts = ['Front End Web Developer', 'UI/UX Developer', 'Problem Solver.'];
            let count = 0;
            let index = 0;
            let currentText = '';
            let letter = '';
        
            (function type() {
                if (count === texts.length) {
                    count = 0;
                }
        
                currentText = texts[count]
                letter = currentText.slice(0, ++index)
        
                devRef.current.innerText = letter;
        
                if (letter.length === currentText.length) {
                    count++;
                    index = 0;
                }
        
                setTimeout(type, 100)
            }());
        }
        typeWriting();
    })

  return (
  <>
    <header id="home" className="header container">
        <div className="my-links">
            <a href="https://github.com/Zabzx" target="_blank"><AiFillGithub className={lightToggle ? " my-link-logo github-link-white" : "my-link-logo github-link"}/></a>
            <a href="https://twitter.com/zabzDev" target="_blank"><AiOutlineTwitter className="my-link-logo twitter-link"/></a>
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
        <h3 ref={hiRef} className="intro-heading">Hi!, My name is,</h3>
        <h1 ref={nameRef} className="intro-heading">Ziabeher Phillips</h1>
        <h3 ref={devRef} className="intro-heading typing">A UI / UX Developer</h3>

        <div className="passion">
            <h1>"You can't teach Passion"</h1>

            <div className="blob">
            <svg height="300" width="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <g>
            <path ref={blobRef} fill="#4D0ED1" d="M38.3,-64.5C47.3,-53.7,50.9,-39.3,56.6,-26.1C62.3,-12.8,70.1,-0.8,71.3,12.2C72.4,25.2,66.9,39.2,56.5,46.1C46.1,53,30.7,52.7,17.8,53C4.9,53.2,-5.6,53.9,-14.7,50.9C-23.9,47.9,-31.8,41.1,-43.9,34.2C-56,27.2,-72.3,20,-76.6,9.3C-80.9,-1.4,-73.1,-15.6,-63.9,-26.5C-54.7,-37.3,-44.1,-44.8,-33.3,-54.7C-22.4,-64.6,-11.2,-77,1.7,-79.6C14.6,-82.3,29.2,-75.2,38.3,-64.5Z" transform="translate(100 100)" />
            </g>
            <g>
            <path style={{visibility: 'hidden'}} ref={blob2Ref} fill="#4D0ED1" d="M43.4,-66.1C55.8,-59.5,65.1,-46.7,72.3,-32.5C79.6,-18.3,84.8,-2.7,81.7,11C78.5,24.6,67,36.3,54.5,42.9C42.1,49.5,28.7,50.9,15.3,57.1C1.9,63.2,-11.5,74.1,-23.4,73.5C-35.3,72.8,-45.6,60.7,-50.2,47.8C-54.8,34.8,-53.6,21.2,-53.6,8.8C-53.7,-3.6,-55.1,-14.7,-53,-26.3C-51,-38,-45.5,-50.2,-36.1,-58.1C-26.7,-66,-13.4,-69.6,1.1,-71.2C15.5,-72.9,31,-72.6,43.4,-66.1Z" transform="translate(100 100)" />
            </g>
            </svg>

            </div>
        </div>
    </section>

    <div className="arrow-animation">
        <IoIosArrowDown className="arrow-down"/>
        <IoIosArrowDown/>
        <IoIosArrowDown/>
    </div>

    <section className="divider1-container">
    <div className="divider1">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
    </svg>
    </div>
    </section>
    </>
  )
}

export default Hero