import React from 'react'
import "./hamburgerMenu.css"

const HamburgerMenu = () => {
  return (
    <div className='hamburgerMenu'>
      <ul className='hamburger-ul'>
        <li className='hamburger-ul-li'>Home</li>
        <li className='hamburger-ul-li'>Find Teachers</li>
        <li className='hamburger-ul-li'>Find Jobs</li>
        <li className='hamburger-ul-li'>Contact Us</li>
        <li className='hamburger-ul-li'>FAQs</li>
        <li className='hamburger-ul-li'>Login</li>
        <li className='hamburger-ul-li'>Signup</li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
