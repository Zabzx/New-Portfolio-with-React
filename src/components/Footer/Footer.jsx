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
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsTwitter/></a>
        <a href=""><BsLinkedin/></a>
        <a href=""><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ziabeher Phillips. All rights rreserved.</small>
      </div>
    </footer>
  )
}

export default Footer