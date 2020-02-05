import React from 'react';
import './Contact.css'
import myImage from '../images/chat.png';
import mail from '../images/social/mail.svg'
import twitter from '../images/social/twitter.svg'
import linkedin from '../images/social/linkedin.svg'
import github from '../images/social/github.svg'
import instagram from '../images/social/insta.svg'
import Resume from '../Koushik_Resume.pdf'

export default function Contact() {
  return (
    <div className="contact">
      <img src={myImage} alt="chat" className="contact-image" />
      <div>
        <h2>Hello Human! Wanna chat?</h2>
      </div>
      <div className="social-menu1">
        <a href="mailto:koushikmohan1996@gmail.com">
          <div className="social-logo-div">
            <img src={mail} alt="mail" className="social-logo" />
          </div>
        </a>
        <a href="https://github.com/koushikmohan1996">
          <div className="social-logo-div">
            <img src={github} alt="github" className="social-logo" />
          </div>
        </a>
      </div>
      <div className="social-menu2">
        <a href="https://www.linkedin.com/in/koushik-mohan/">
          <div className="social-logo-div">
            <img src={linkedin} alt="linkedin" className="social-logo" />
          </div>
        </a>
        <a href="https://twitter.com/KoushikKM96/">
          <div className="social-logo-div">
            <img src={twitter} alt="twitter" className="social-logo" />
          </div>
        </a>
      </div>
      <div className="social-menu3">
        <a target="_blank" rel="nofollow noopener noreferrer" href={Resume}>
          <div className="resume">
            Resume
          </div>
        </a>
      </div>
    </div>
  );
}