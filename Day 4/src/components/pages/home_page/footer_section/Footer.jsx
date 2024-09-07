import React from 'react';
import "./footer.css";
import Logo from "../../../images/home_page_images/logo.png";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='parent'>
      <div className='footer'>
        <div className='img'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='rights'>
          All rights reserved
        </div>
        <div className='social-icons'>
          <SocialIcon url="https://www.instagram.com"/>
          <SocialIcon url="https://www.facebook.com" />
          <SocialIcon url="https://twitter.com" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
