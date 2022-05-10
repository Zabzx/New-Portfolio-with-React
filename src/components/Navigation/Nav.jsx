import './Nav.css';
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillFolderOpen } from 'react-icons/ai'
import { GrTechnology } from 'react-icons/gr'
import { MdOutlineContactSupport } from 'react-icons/md'
import { AiOutlineArrowDown } from 'react-icons/ai'

import React from 'react'

const Nav = () => {
  return (
    <nav>
        <a href="#home"><AiFillHome className='nav-icon'/></a>
        <a href="#about"><BsFillPersonFill className='nav-icon'/></a>
        <a href="#tech"><GrTechnology className='nav-icon'/></a>
        <a href="#projects"><AiFillFolderOpen className='nav-icon'/></a>
        <a href="#contact"><MdOutlineContactSupport className='nav-icon'/></a>
        <a href="#footer"><AiOutlineArrowDown className='nav-icon'/></a>
    </nav>
  )
}

export default Nav