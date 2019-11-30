import React from 'react';
import './Contact.css'
import myImage from '../images/chat.png';
import mail from '../images/social/mail.svg'
import facebook from '../images/social/facebook.svg'
import linkedin from '../images/social/linkedin.svg'
import github from '../images/social/github.svg'
import instagram from '../images/social/insta.svg'

export default function Contact() {
  return (
    <div className="contact">
      <img src={myImage} alt="chat" className="contact-image" />
      <div>
        <h2>Hello Human! Wanna chat?</h2>
      </div>
      <div>
        <a href="mailto:koushikmohan1996@gmail.com"><img src={mail} alt="mail" className="social-logo"/></a>
      </div>
      <div className="social-menu">
        <a href="https://github.com/koushikmohan1996" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="social-logo"/></a>
        <a href="https://www.linkedin.com/in/koushik-mohan/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="social-logo"/></a>
        <a href="https://www.instagram.com/k.m.koushik/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram" className="social-logo"/></a>
        <a href="https://www.facebook.com/koushik1496" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" className="social-logo"/></a>
      </div>
    </div>
  );
}