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
        <AiFillHome className='nav-icon'/>
        <BsFillPersonFill className='nav-icon'/>
        <AiFillFolderOpen className='nav-icon'/>
        <GrTechnology className='nav-icon'/>
        <MdOutlineContactSupport className='nav-icon'/>
        <AiOutlineArrowDown className='nav-icon'/>
    </nav>
  )
}

export default Nav