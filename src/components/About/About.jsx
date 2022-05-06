import './About.css'
import { BiWorld } from 'react-icons/bi'
import { RiMedal2Fill } from 'react-icons/ri'
import { AiFillFolderOpen } from 'react-icons/ai'

import React from 'react'

const About = () => {
  return (
    <div className="about-container">
    <section className="about container">
        <div className="about-img">
        <img alt="GIF" src="https://tenor.com/view/coding-gif-24297652.gif/" />
        </div>

        <div className="about-txt">
            <div className="about-tags">
                <div className="tag">
                    <BiWorld className="tag-icon"/>
                    <small>Real World Projects Completed</small>
                </div>
                <div className="tag">
                    <RiMedal2Fill className="tag-icon"/>
                    <small>Over 2 Years of Coding Experience</small>
                </div>
                <div className="tag">
                    <AiFillFolderOpen className="tag-icon"/>
                    <small>30+ Projects Completed</small>
                </div>
        </div>
            <h1>About Me</h1>
            <p>I'm a Front End Web Developer based in the <span className="secondary-color">Caribbean.</span> I value high quality and meaningful development. My goal is to be part of projects that will satisfy the user, that will help me grow as a developer and to satisfy my itch of overcoming challenging development problems. I love to learn, seriously, I spent over a year self learning programming and built numerous projects on my own. Learning UI / UX development, best practices and debugging. There is nothing more satisfying than overcoming a challenging problem and feeling the instant growth you gain from it. Being a developer is me being in my comfort zone and I wouldn't want it any other way. By the end of 2022, I will be a full stack developer and aiming to improve my tech stack even further, I'm just getting started :)</p>
        </div>
    </section>
    </div>
  )
}

export default About