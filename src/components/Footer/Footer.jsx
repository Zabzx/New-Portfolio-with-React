import React from 'react'
import './Footer.css'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="" className="footer__logo">Ziabeher Phillips</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tech">Tech</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/zabzDev" target="_blank"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/ziabeher-phillips-722595227/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Zabzx" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ziabeher Phillips. All rights rreserved.</small>
      </div>
    </footer>
  )
}

export default Footer